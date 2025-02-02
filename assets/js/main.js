
async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const posts =await response.json();
    const result = posts.map (function (user){
        return `
        
            <table id="detailsInfoTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tbody>
            </table>
          
                <div class="addressInfo">
                    <h2>Address information</h2>
                    <span>Street:</span> ${user.address.street}<br>
                    <span>Suite:</span> ${user.address.suite}<br>
                    <span>City:</span> ${user.address.city}<br>
                    <span>Zipcode:</span> ${user.address.zipcode}<br>
                    <h2>Geo Information</h2>
                    <span>Geo:</span>
                    <div class="addressInfo">
                        <span>Lat:</span> ${user.address.geo.lat}<br>
                        <span>Lng:</span> ${user.address.geo.lng}
                    </div>
                </div>
                <div class="contactInfo">
                    <h2>Contact Information</h2>
                    <span>Phone:</span> ${user.phone}<br>
                    <span>Website:</span> ${user.website}<br>
                </div>
                
               
                <div class="workInfo">
                    <h2>Work Information</h2>
                    <span>Name:</span> ${user.company.name}<br>
                    <span>Catch Phrase:</span> ${user.company.catchPhrase}<br>
                    <span>BS:</span> ${user.company.bs}
                </div>
            `

    }).join(' ');
    
    document.querySelector(".detailsInfo").innerHTML=result;
    
}
getPosts();

