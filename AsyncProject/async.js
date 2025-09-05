async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();

        console.log("User Fetch Successfully");
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`City: ${user.address.city}`);
        console.log(`Zipcode: ${user.address.zipcode}`);
        console.log(`Phone: ${user.phone}`);
    } catch (error) {
        console.error("Error fetching user:", error.message)
    }
}


async function fetchMultipleUsers() {
    const userIds = [2,3,4,5,];
    console.log("fetching multiple users one by one");

    for (const id of userIds) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if(!response.ok) throw new Error(`User ${id} not found`);

            const user = await response.json();
            console.log(`User ${id}: ${user.name}, Email: ${user.email}`);
        } catch (error) {
            console.log("Error fetching user: ", error.message)
        }
        }
    }

    console.log(`\n -------------------------------- \n`);


async function fetchUsersParallel(){
    const userIds = [6,7,8,9];

    try {
        console.log("Fetching Multiple Users in Parallel");

        const userPromises = userIds.map((id) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if(!response.ok) throw new Error(`User ${id}, not found`);
            return response.json();
        })
    );

        const users = await Promise.all(userPromises);
        users.forEach(user => {
            console.log(`User ${user.id}: ${user.name}, Email:${user.email}`);
        });
    } catch(error) {
        console.log(error.message);
    }
}

async function fetchfirstAvailableUser() {
    const userids = [6,7,8,9];
    const userPromises = userids.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            if(!res.ok) throw new Error(`User id ${id}, not found!`);
            return res.json();
        })
    );

    try {
        const firstUser = await Promise.any(userPromises)
        console.log(`First available user: ${firstUser.name}, Email: ${firstUser.email}`);
    } catch (error) {
        console.log(`All request failed:`, error.message)
    }
}

async function firstFetchResponse() {
    const userName  = [4,5,6,7];
    const userpromises = userName.map(name =>
        fetch(`https://jsonplaceholder.typicode.com/users/${name}`)
        .then(res => {
        return res.json();
    })
    );


    try {
        const result = await Promise.race(userpromises);
        console.log(`First to respond: ${result.name}, ${result.email}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

async function fetchUserAllSettled() {
    const userIds = [10, 20, 30]; // 20 and 30 likely don't exist
    const userPromises = userIds.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    );

    const results = await Promise.allSettled(userPromises);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            const res = result.value;
            if (res.ok) {
                res.json().then(user => {
                    console.log(`✅ User ${user.id}: ${user.name}`);
                });
            } else {
                console.log(`❌ User ${userIds[index]} returned status ${res.status}`);
            }
        } else {
            console.log(`❌ User ${userIds[index]} fetch failed: ${result.reason}`);
        }
    });
}



    




   




async function main() {
    await fetchUser();             
    await fetchMultipleUsers();   
    await fetchUsersParallel();  
    await fetchfirstAvailableUser();
    await firstFetchResponse(); 
    await fetchUserAllSettled();
}
main();




    

    
    

