import axios from "axios";
export default async function handler(request, response) {
    try {
        const { email, content } = request.body;

        if (!email || !content) { throw err }

        const msg = `${email} <br/> ${content}`;

        const url = `http://api.telegram.org/bot${process.env.TELETOKEN}/sendMessage?chat_id=${process.env.TELECHATID}&parse_mode=markdown&text=${email}`;
        await axios.get(url)

        response.status(200).send();

    } catch {
        response.status(400).send();
    }
}