export function creeateStudent(req,res) {

    const newStudent = new Student(req.body)

    newStudent.save().then(
        ()=>{
            res.json("Student added Successfully")
        }
    )
}

        
export function getAllStudents(req,res){
    Student.find().then(
        (students)=>{
            res.json(students)
        }
    )
}