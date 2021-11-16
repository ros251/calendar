import os
from flask import Flask, render_template, request
from datetime import datetime, date, timedelta
import json
import sqlite3

app = Flask(__name__)
WEEKDAYS_ARR = [
  'Monday', 
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]
MONTH_ARR = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] 

@app.route("/")
def index():
  conn = sqlite3.connect('./data/dev_database.db')
  cur = conn.cursor()

  today = date.today()
  nine_dates = []
  nine_days_data = []
  for num in range(1,10):
    iter_day = today + timedelta(days=num-3)
    date_str = iter_day.strftime('%m/%d/%Y')
    nine_dates.append(date_str)
    cur.execute("SELECT note_id, date_str, icon_key, icon_color, structured_data, free_text FROM Notes WHERE date_str = '" + date_str + "'")
    rows = cur.fetchall()
    day_data = []
    for row in rows:
      day_data.append({
        'note_id': row[0],
        'date_str': row[1],
        'icon_key': row[2],
        'icon_color': row[3],
        'structured_data': row[4],
        'free_text': row[5]
      })
    nine_days_data.append(day_data)

  data_dict = {
    'today': {
      'day': today.day,
      'weekday': WEEKDAYS_ARR[today.weekday()],
      'month': today.month,
      'year': today.year
    },
    'nine_dates' : nine_dates,
    'nine_days_data': nine_days_data
  }
  print(data_dict)

  return render_template('index.html', data=data_dict)

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_note():
  note_obj = request.json
  print(note_obj)
  
  if (note_obj['note_id']):
    note_id = note_obj['note_id']
  else:
    now = datetime.now()
    note_id = now.strftime('%Y%m%d%H%M%S')
  
  conn = sqlite3.connect('./data/dev_database.db')
  cur = conn.cursor()
  cur.execute("INSERT INTO Notes (note_id, date_str, icon_key, icon_color, structured_data, free_text) VALUES (?,?,?,?,?,?)",(note_id, note_obj['date_str'], note_obj['icon_key'], note_obj['icon_color'], note_obj['structured_data'], note_obj['free_text']))
  conn.commit()
  conn.close()
  return 'what'

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 1242), debug=True)