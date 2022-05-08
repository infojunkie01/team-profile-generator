module.exports = templateData => {
    // console.log("Teamplate", templateData);
    // console.log("profilesData", profilesData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
      <header class="text-center">
          <h1 class="">My Team</h1>
      </header>
  
      <main class="container my-5">
          <section class="my-3" id="profile-section">
            ${generateProfiles(profilesData)}
          </section>  
      </main>
  
    </body>
    </html>
    `;
  };



const generateProfiles = profilesArr => {
    return `
        ${profilesArr
          .map(({ name, id, email, office, role }) => {
            return `
            <div class="profile-card shadow-sm mb-4">
              <div class="profile-name-role p-3">
                <h4 class="mb-0">${name}, <span class="font-weight-light">${role}</span></h4>
              </div>
              <div class="profile-other-info p-3">
                <p class="bg-white p-2 border border-light">ID: ${id}</p>
                <p class="bg-white p-2 border border-light">Email: ${email}</p>
                <p class="bg-white p-2 border border-light">Office #: ${office}</p>
              </div>
            </div>
          `;
          })
          .join('')}

    `;
  };
  