export const fetchFeedPosts = async () => {
    const res = await fetch('https://fakerapi.it/api/v1/custom?_quantity=20&author=name&content=text&dateTime=dateTime');
    return await res.json();
}

export const fetchUserPosts = async () => {
    const res = await fetch('https://fakerapi.it/api/v1/custom?_quantity=5&content=text&dateTime=dateTime');
    return await res.json();
}

export const fetchUserInfo = async () => {
    const res = await fetch('https://fakerapi.it/api/v1/custom?_quantity=1&country=country&companyName=company_name');
    return await res.json();
}

