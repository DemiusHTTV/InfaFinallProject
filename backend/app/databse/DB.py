import sqlite3

class Database:


    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None

    def connect(self):
        self.connection = sqlite3.connect(self.db_name)


    def execute_query(self, query, params=None):
        if self.connection is None:
            self.connect()
        cursor = self.connection.cursor()
        params =cursor.execute(query, params) if params else cursor.execute(query)
        self.connection.commit()
        return params
    
    def query(self, sql: str, params: tuple = ()) -> list[tuple]:
        try:
            cur = self.connection.cursor()
            cur.execute(sql, params)
            return cur.fetchall()
        except Exception:
            raise
    

    def close(self):
        if self.connection:
            self.connection.close()
            self.connection = None