import sqlite3



def main():
    """
    Main function to run the grade processing system.
    """
   
    with sqlite3.connect('students.db') as conn:
        cursor = conn.cursor()

        
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                grade INTEGER NOT NULL,
                grade_status TEXT NOT NULL
            );
        """)
        
        
        conn.commit()

        

        
        ctr = 0

        
        while True:
            
            name = input("What is your Name? : ")

            grade = None
            
            while grade is None:
                try:
                    
                    input_grade = input("What is your grade? (60-100): ")
                    grade = int(input_grade)

                    
                    if not (60 <= grade <= 100):
                        print("Invalid grade. Please enter a number between 60 and 100.")
                        grade = None

                except ValueError:
                    
                    print(f"Please enter a valid number, {name}")
                    grade = None 

           
            if 60 <= grade <= 74:
                grade_status = f"Your grade is 5, better luck next time {name}"
            elif 75 <= grade <= 80:
                grade_status = f"Your grade is 3, congrats you pass {name}"
            elif 81 <= grade <= 90:
                grade_status = f"Your grade is 2, congrats you pass {name}"
            elif 91 <= grade <= 100:
                grade_status = f"Your grade is 1, congrats you are high honors {name}"
            else:
                
                grade_status = "Invalid grade."

           
            cursor.execute("INSERT INTO students (name, grade, grade_status) VALUES (?, ?, ?)",
                           (name, grade, grade_status))
            
            
            conn.commit()
            ctr += 1

            
            print(grade_status)

            
            again = input("Do you want to enter another Name and Grade? (y/n): ")
            
            
            if again.lower() != 'y':
                print(f"Thank you for using the system, {name}")
                break

   
    
    
    with sqlite3.connect('students.db') as conn:
        cursor = conn.cursor()
        
        
        cursor.execute("SELECT * FROM students")
        all_students = cursor.fetchall()
        
        print(f"\nA total of {len(all_students)} students used the system.")
        print("Here are all the records from the database:")
        
        
        for student in all_students:
            print(student)


if __name__ == "__main__":
    main()

