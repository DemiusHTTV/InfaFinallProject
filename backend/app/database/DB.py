import sqlite3

class Database:


    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None

    def connect(self):
        self.connection = sqlite3.connect(self.db_name)
        return self.connection

      
    def query(self, query: str, params: tuple = ()) -> list[tuple]:
        try:
            cur = self.connection.cursor()
            result = cur.execute(query, params) if params else cur.execute(query)
            return cur.fetchall()
        except Exception:
            raise
    

    def close(self):
        if self.connection:
            self.connection.close()
            self.connection = None