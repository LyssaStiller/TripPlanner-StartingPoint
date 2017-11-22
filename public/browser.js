document.getElementById("hotels-choices")
    .addEventListener("click", function() {
        fetch('/api')
            .then(function (resStream){
                return resStream.json()
            })
            .then(function (allData){
                const hotels = allData[0]; 
                hotels.forEach(function (hotel){
                    const option = document.createElement('option');
                    option.innerHTML = `${hotel.name}`

                    document.getElementById("hotels-choices").append(option)
                })
            })

            
    
    })

    document.getElementById("restaurants-choices")
    .addEventListener("click", function() {
        fetch('/api')
            .then(function (resStream){
                return resStream.json()
            })
            .then(function (allData){
                const restaurants = allData[1]; 
                restaurants.forEach(function (restaurant){
                    const option = document.createElement('option');
                    option.innerHTML = `${restaurant.name}`

                    document.getElementById("restaurants-choices").append(option)
                })
            })
            
    
    })


    document.getElementById("activities-choices")
    .addEventListener("click", function() {
        fetch('/api')
            .then(function (resStream){
                return resStream.json()
            })
            .then(function (allData){
                const activities = allData[2]; 
                activities.forEach(function (activity){
                    const option = document.createElement('option');
                    option.innerHTML = `${activity.name}`

                    document.getElementById("activities-choices").append(option)
                })
            })
            
    
    })