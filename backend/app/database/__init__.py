from .DB import Database

db = Database('db')

db.connect()
db.query('''PRAGMA foreign_keys = ON''')
db.query('''CREATE TABLE IF NOT EXISTS clients
         (id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         email TEXT NOT NULL,
         phone TEXT NOT NULL)''')

db.query('''CREATE TABLE IF NOT EXISTS cars(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER NOT NULL,
         brand TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER,
    license_plate TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
         )''')

db.query('''
CREATE TABLE services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
)
''')

db.query('''
CREATE TABLE parts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    quantity INTEGER DEFAULT 0,
    price REAL NOT NULL
)''')

db.query('''CREATE TABLE workers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    specialization TEXT
)''')
db.query('''
CREATE TABLE appointment_services (
    appointment_id INTEGER,
    service_id INTEGER,

    FOREIGN KEY (appointment_id)
        REFERENCES appointments(id),

    FOREIGN KEY (service_id)
        REFERENCES services(id)
)
''')
db.query('''CREATE TABLE appointment_parts (
    appointment_id INTEGER,
    part_id INTEGER,
    quantity INTEGER DEFAULT 1,

    FOREIGN KEY (appointment_id)
        REFERENCES appointments(id),

    FOREIGN KEY (part_id)
        REFERENCES parts(id)
)''')