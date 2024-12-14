let mode = document.getElementById("mode");
let darkheader = document.getElementById("darkheader");
let darkmoon = document.getElementById("darkmoon");
let searchinp = document.getElementById("searchinp");
let profile = document.getElementById("profile");
let usernamecolor = document.getElementById("usernamecolor");
let userstats = document.getElementById("userstats");
let stats = document.getElementById("stats");
let Repos = document.getElementById("Repos");
let Reposnum = document.getElementById("Reposnum");
let Following = document.getElementById("Following");
let Followingnum = document.getElementById("Followingnum");
let Followers = document.getElementById("Followers");
let Followersnum = document.getElementById("Followersnum");
let changemode = document.getElementById("changemode");


mode.addEventListener("click", () => {
    if (document.body.className === "lightbody") {
        document.body.className = "darkbody";
        darkheader.className = "darkheader";
        mode.className = "dark";
        darkmoon.className = "fa-solid fa-sun";
        searchinp.className = "searchinpdark";
        profile.className = "profiledark";
        userstats.className = "userstatsdark";
        Repos.style.color = "#ffffff";
        usernamecolor.style.color = "#ffff";
        Reposnum.style.color = "#ffffff";
        Following.style.color = "#ffffff";
        Followingnum.style.color = "#ffffff";
        Followers.style.color = "#ffffff";
        Followersnum.style.color = "#ffffff";
        accbio.style.color = "#ffffff";
        idblog.style.color = "#ffffff";
        locationid.style.color = "#ffffff";
        githubuser.style.color = "#ffffff";
        twitterid.style.color = "#ffffff";
        locid.style.color = "#ffffff";
        lkid.style.color = "#ffffff";
        twid.style.color = "#ffffff";
        bildid.style.color = "#ffffff";
        changemode.innerText = "LIGHT"
    } else if (document.body.className === "darkbody") {
        userstats.className = "userstatslight";
        darkheader.className = "lightheader";
        document.body.className = "lightbody";
        mode.className = "light";
        darkmoon.className = "fa-solid fa-moon";
        searchinp.className = "searchinplight";
        profile.className = "profilelight";
        usernamecolor.style.color = "#2b3442";
        Repos.style.color = "#2b3442";
        Reposnum.style.color = "#2b3442";
        Followingnum.style.color = "#2b3442";
        Following.style.color = "#2b3442";
        Followers.style.color = "#2b3442";
        Followersnum.style.color = "#2b3442";
        accbio.style.color = "#4b6a9b";
        idblog.style.color = "#4b6a9b";
        locationid.style.color = "#4b6a9b";
        githubuser.style.color = "#4b6a9b";
        twitterid.style.color = "#4b6a9b";
        bildid.style.color = "#4b6a9b";
        twid.style.color = "#4b6a9b";
        lkid.style.color = "#4b6a9b";
        locid.style.color = "#4b6a9b";
        changemode.innerText = "DARK"
    }
});

// -------------------------------------------------fetch--------------------------------------------------------

let Searchform = document.getElementById("Searchform")

Searchform.addEventListener("submit" , (e) =>{
    e.preventDefault();
    getdata()
})



async function getdata() {
    try {

        let username = searchinp.value;
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        innertoHTML(data);
        console.log(data);
    } catch (error) {
        
    }
}

let avatar = document.getElementById("avatar")
let avatar2 = document.getElementById("avatar2")
let acclink = document.getElementById("acclink")
let accbio = document.getElementById("accbio")
let locationid = document.getElementById("locationid")
let idblog = document.getElementById("idblog")
let twitterid = document.getElementById("twitterid")
let githubuser = document.getElementById("githubuser")
let bildid = document.getElementById("bildid")
let twid = document.getElementById("twid")
let lkid = document.getElementById("lkid")
let locid = document.getElementById("locid")



function innertoHTML(data) {
    avatar.src = data.avatar_url
    avatar2.src = data.avatar_url
    usernamecolor.textContent = data.login
    acclink.textContent = `@${data.login}`
    acclink.href = data.html_url
    Followersnum.textContent = data.followers
    Followingnum.textContent = data.following
    Reposnum.textContent = data.public_repos

    if (data.bio === null) {
        accbio.textContent = "This profile has no bio"
    }else{
        accbio.textContent = data.bio
    }

    if (data.twitter_username === null) {
        twitterid.textContent = "Not Available"
    }else{
        twitterid.textContent = data.twitter_username
    }
    
    if (data.blog === "") {
        idblog.textContent = "No blog"
    }else{
        idblog.textContent = data.blog
    }

    if (data.location === null) {
        locationid.textContent ="No Location"
    }else{
        locationid.textContent = data.location
    }

}


// async function fetchdata() {
//     try {
//         // Fetch the initial data
//         const response = await fetch("https://api.github.com/users");
//         const users = await response.json();
//         console.log("Fetched Users:", users);

//         // Loop through each user and fetch additional data from their URLs (e.g., their profile API links)
//         for (const user of users) {
//             if (user.url) { // Check if a URL exists in the data
//                 try {
//                     const userResponse = await fetch(user.url); // Fetch the user's details
//                     const userDetails = await userResponse.json();
//                     console.log("User Details:", userDetails);
//                 } catch (error) {
//                     console.log(`Error fetching user details for ${user.login}:`, error);
//                 }
//             }
//         }
//     } catch (error) {
//         console.log("Error fetching initial data:", error);
//     }
// }

// fetchdata();