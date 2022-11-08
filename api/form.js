//import axios from "axios";
export default async function handler(request, response) {
    try {
        console.log(process.env.TELETOKEN)
        console.log(process.env.TELECHATID)
        const { email, content } = request.body;

        if (!email || !content) { throw err }

        const msg = `${email} <br/> ${content}`;

        const url = `http://api.telegram.org/bot${process.env.TELETOKEN}/sendMessage?chat_id=${process.env.TELECHATID}&text=${email}`;
        //await axios.get(url)
        await fetch(url)
        response.status(200).send();

    } catch {
        response.status(400).send();
    }
}