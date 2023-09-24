const GetCourse = () => {

    // in ra 1 danh sách tên khóa học
    const course = [
        {
          name : 'PHP',
        },
        { 
          name : 'JS',
        },
        {
            name: 'Java'
        }
      ];

    return (
        <ol >
          {course.map((course, index) => 
              <li key={index}>{course.name}</li>
            )
          }
        </ol>
    )
}

export default GetCourse;