function generateTeam(teamArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class = "container-fluid bg-danger text-white text-center fs-3">My Team</header>
    
        <div class="container px-4">
            <div class="row gx-5 justify-content-around">
                <div class = "col-sm ">
                    <div class="card mt-4 shadow mb-5 bg-body rounded">
                        <div class="card-body p-0 bg-secondary bg-opacity-10 ">
                        ${teamArray
                            .filter(({ officeNumber }) => officeNumber)
                            .map(({ name, id, getRole, email, officeNumber }) => {
                              return `
                            <div class="container-fluid ps-3 bg-primary">
                            <h5 class="card-title pt-2 text-white">${name}</h5>
                            <h6 class="card-subtitle pb-2 text-white">${getRole()}</h6>
                            </div>
                            <ul class="list-group p-4">
                                <li class="list-group-item">ID:${id}</li>
                                <li class="list-group-item">Email:<a href = "mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">Office Number:${officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                 </div>`;
                })
                .join('')}
                ${teamArray
                    .filter(({ github }) => github)
                    .map(({ name, id, getRole, email, github }) => {
                      return `
                <div class = "col-sm ">
                    <div class="card mt-4 shadow mb-5 bg-body rounded">
                        <div class="card-body p-0 bg-secondary bg-opacity-10 ">
                            <div class="container-fluid ps-3 bg-primary">
                            <h5 class="card-title pt-2 text-white">${name}</h5>
                            <h6 class="card-subtitle pb-2 text-white">${getRole()}</h6>
                            </div>
                            <ul class="list-group p-4">
                                <li class="list-group-item">ID:${id}</li>
                                <li class="list-group-item">Email:<a href = "mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">Github:<a href="https://www.github.com/${github}" target= "_blank">${github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                })
                .join('')}
                ${teamArray
                    .filter(({ school }) => school)
                    .map(({ name, id, getRole, email, school }) => {
                      return `
                <div class = "col-sm ">
                    <div class="card mt-4 shadow mb-5 bg-body rounded">
                        <div class="card-body p-0 bg-secondary bg-opacity-10 ">
                            <div class="container-fluid ps-3 bg-primary">
                            <h5 class="card-title pt-2 text-white">${name}</h5>
                            <h6 class="card-subtitle pb-2 text-white">${getRole()}</h6>
                            </div>
                            <ul class="list-group p-4">
                                <li class="list-group-item">ID:${id}</li>
                                <li class="list-group-item">Email:<a href = "mailto: ${email}">${email}</a></li>
                                <li class="list-group-item">School:${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                })
                .join('')}
            </div>
        </div>  
    </body>
    </html>`

};
 
module.exports= generateTeam;