export default async function handler(request, response) {
    const { email, content } = request.body;
    response.status(200).send({email,content})
}