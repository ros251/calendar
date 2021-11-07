import sqlite3

conn = sqlite3.connect('calendar_database.db')

conn.execute('CREATE TABLE Notes (note_id TEXT PRIMARY_KEY, date_key TEXT, icon_key TEXT, title TEXT, text TEXT)')

date1 = '20211109'
date2 = '20211110'

cur = conn.cursor()
cur.execute("INSERT INTO Notes (note_id, date_key, icon_key, title, text) VALUES (?,?,?,?,?)",('1', date1, 'guitar', 'I Played Guitar', 'Yeah it was fun.') )
cur.execute("INSERT INTO Notes (note_id, date_key, icon_key, title, text) VALUES (?,?,?,?,?)",('2', date2, 'bike', 'I Road My Bike', 'Down the windy road.') )
cur.execute("select * from Notes")
rows = cur.fetchall()
print(rows)
			
conn.commit()
conn.close()