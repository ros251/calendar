import sqlite3
from datetime import datetime

conn = sqlite3.connect('dev_database.db')
conn.execute('CREATE TABLE Notes (note_id TEXT PRIMARY_KEY, date_str TEXT, icon_key TEXT, icon_color TEXT, structured_data TEXT, free_text TEXT)')

now = datetime.now()
id_from_date = now.strftime('%Y%m%d%H%M%S')
str_from_date = now.strftime('%m/%d/%Y')
cur = conn.cursor()
cur.execute("INSERT INTO Notes (note_id, date_str, icon_key, icon_color, structured_data, free_text) VALUES (?,?,?,?,?,?)",(id_from_date, str_from_date, 'guitar', '#A600A6', 'some | data | here', 'This is some text describing this note.'))
cur.execute("SELECT * FROM Notes WHERE date_str = '" + str_from_date + "'")
rows = cur.fetchall()		
print(rows)	

conn.commit()
conn.close()