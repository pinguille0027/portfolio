//import axios from "axios";
export default async function handler(request, response) {
    try {
        console.log(process.env.TELETOKEN);
        console.log(process.env.TELECHATID);
        const { email, content } = request.body;

        if (!email || !content) { throw err }

        const msg = `${email} <br/> ${content}`;

        const url = `https://api.telegram.org/bot${process.env.TELETOKEN}/sendMessage?chat_id=${process.env.TELECHATID}&text=${email}`;
        console.log(url);
        //await axios.get(url)
        await fetch("https://api.telegram.org/bot5696004560:AAFyGqxj1gVrtKI1kCPSwuqGSLPtBonHz_g/sendMessage?chat_id=1264963875&text=uyu", { headers: request.headers });
        console.log(url);
        response.status(200).send();

    } catch(e) {
        response.status(400).send(e);
    }
}