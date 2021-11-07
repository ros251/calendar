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
  conn = sqlite3.connect('./data/calendar_database.db')
  cur = conn.cursor()

  today = date.today()
  nine_dates = []
  nine_date_keys = []
  nine_days_data = []
  for num in range(1,10):
    iter_day = today + timedelta(days=num-3)

    nine_dates.append(iter_day.strftime('%d/%m/%Y'))
    date_key = iter_day.strftime('%Y%m%d')
    nine_date_keys.append(date_key)

    cur.execute("select date_key, icon_key, title, text from Notes where date_key = '" + date_key + "'")
    rows = cur.fetchall()
    day_data = []
    for row in rows:
      day_data.append({
        'icon_key': row[1],
        'title': row[2],
        'text': row[3]
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
    'nine_date_keys' : nine_date_keys,
    'nine_days_data': nine_days_data
  }
  print(data_dict)

  return render_template('index.html', data=data_dict)

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_note():
  note_obj = request.json
  
  print(note_obj)
  now = datetime.now()
  note_id = now.strftime('%Y%m%d%H%M%S')
  print(note_id)
  conn = sqlite3.connect('./data/calendar_database.db')
  cur = conn.cursor()
  cur.execute("INSERT INTO Notes (note_id, date_key, icon_key, title, text) VALUES (?,?,?,?,?)",(note_id, note_obj['date_key'], note_obj['icon'], note_obj['title'], note_obj['text']) )
  conn.commit()
  conn.close()
  return 'what'

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 1242), debug=True)