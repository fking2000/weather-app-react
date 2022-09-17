// Utilities module
//
// this module holds utility functions that are intended to be used by many 
// client side methods for processing the data before sending it to the server
// or adfter receiving it.

// Used by the post methods when creating the form's body.
// it replaces all empty input (accepted by JS as empty strings) to undefined.
function replacer(i, val)
{
    if(val === "")
    {
        return undefined; // change the empty string to undefined
    } else {
        return val; // unchanged
    }
}

// this method process all types of known expected errors.
// either:
// - multiple errors in json element (errors)
// - single error in the message element
// - text message
/*async function errorToString(errRes)
{
    try {
        let errMsgStr = "";
        // try parse the response as json. if it's not, the next step
        // would be in catch (use clone() if you know you may need to
        // access the body more than once)
        let errJson = await errRes.clone().json();
        if (errJson.errors)
        {
            // the error response contains multiple errors in json element (as 'errors')
            Object.values(errJson.errors).forEach(err => {
                errMsgStr += err.message +"<br><br>";
            });
        } else {
            // the error response contains a single error (as 'message'))
            errMsgStr += errJson.message + "<br><br>";
        }
        // moved the return statement as the last command of the file.
        return errMsgStr;
    } catch (err)
    {
        // error message is not a JSON. read it as text
        return await errRes.text();
    }
}*/

// this method process all types of known expected responses.
// either:
// - multiple elements in json element (like in find())
// - single element (like in homepage student search)
// - text message
/*async function resToString(res, isStudent)
{
    try {
        let resString = "";
        // try parse the response as json. if it's not, the next step
        // would be in catch (use clone() if you know you may need to
        // access the body more than once)
        let jsonRes = await res.clone().json();
        if(Array.isArray(jsonRes))
        {
            // the response contains multiple elements in json element (as courses or students)
            jsonRes.forEach(item => {
                if(isStudent)
                    resString += studentToString(item);
                else
                    resString += courseToString(item);
                });
        } else {
            // the response contains a single element in json element (as courses or students)
            if(isStudent)
                resString += studentToString(jsonRes);
            else
                resString += courseToString(jsonRes);
        }
        return resString;
    } catch (err)
    {
        // the response is a text
        return await res.text();
    }
}*/

// print the course information when it exists (do not print empty fields)
/*function courseToString(course)
{
    let resString =
    ((course._id) ? ("_id: " + course._id +"<br>") : "") +
    ((course.major) ? ("Major: " + course.major +"<br>") : "") +
    ((course.name) ? ("name: " + course.name +"<br>") : "") +
    ((course.number) ? ("number: " + course.number +"<br>") : "") +
    ((course.duration_in_minutes) ? ("Duration: " + course.duration_in_minutes +"<br>") : "") +
    ((course.begin_date) ? ("Begin Date: " + course.begin_date +"<br>") : "") +
    ((course.end_date) ? ("End Date: " + course.end_date +"<br>") : "") + "<br>";
    return resString;
}*/

// print the student information when it exists (do not print empty fields).
/*function studentToString(student)
{
    let resString =
    ((student._id) ? ("_id: " + student._id +"<br>") : "") +

    ((student.first_name) ? ("First Name: " + student.first_name +"<br>") : "") +

    ((student.last_name) ? ("Last Name: " + student.last_name +"<br>") : "") +

    ((student.email) ? ("email: " + student.email +"<br>") : "") +

    ((student.date_of_birth) ? ("Date of Birth: " + student.date_of_birth +"<br>") : "") + 
    // print courses but only if they exist as full course details (populated by
    // server before sent to client). if it's just a list of _ids don't print it,
    // as it's not informative enough
    (((student.courses.length > 0) &&
     (typeof student.courses[0] === "object")) ?
     ("Courses:<br><br>" + coursesString(student.courses)
     +"<br>") : "") + "<br>";

    return resString;
}
*/
// print courses from list
/*function coursesString(courses)
{
    let courseString = "";
    courses.forEach(course => {
        courseString += courseToString(course) + " -----<br>";
    })
    return courseString;
}*/
module.exports ={
    replacer:replacer
};