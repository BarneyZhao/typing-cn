export async function onRequest(context) {
    // Create a prepared statement with our query
    const ps = context.env.TYPING_CN_DB.prepare('SELECT * from user');
    const data = await ps.first();

    return Response.json(data);
}
