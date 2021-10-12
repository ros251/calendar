import os
from flask import Flask, render_template
from datetime import date, timedelta
import json

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
  today = date.today()
  nine_day_lst = []
  for num in range(1,10):
    iter_day = today + timedelta(days=num-3)
    nine_day_lst.append(iter_day.day)

  data_dict = {
    'today': {
      'day': today.day,
      'weekday': WEEKDAYS_ARR[today.weekday()],
      'month': today.month,
      'year': today.year
    },
    'nineDays': nine_day_lst
  }

  return render_template('index.html', data=data_dict)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 4242), debug=True)