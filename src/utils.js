export const getAuthorLinkID = (author) => {
    const authorId = author
        .toLowerCase()
        .replace('.', '')
        .split(' ')
        .join('_');
    return authorId;
}