document.addEventListener('readystatechange', (event) => { 
    if(event.target.readyState === 'complete') { 
        var dob = document.getElementById('DOB').value;
        var country = document.getElementById('country').value;
        var city = document.getElementById('city').value;
        var fullAddress = document.getElementById('address').value;
        var course = document.getElementById('course').value;
        var query = document.getElementById('message').value;

        var mainQuery = {
            dob: dob,
            country: country,
            city: city,
            fullAddress: fullAddress,
            course: course,
            query: query
        }
        var leadQuery = document.getElementById('leadQuery').value;
        leadQuery = JSON.stringify(mainQuery);
        console.log(leadQuery);
    } 
});