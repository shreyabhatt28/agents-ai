import Retell from "retell-sdk";

export async function GET() {
    const client = new Retell({
        apiKey: process.env.RETELL_API_KEY,
    });

    try{
        const agentResponses = await client.agent.list();
        return new Response(JSON.stringify(agentResponses),{status:200});

    }catch(error){
        return new Response('An error occured', {status:500});
    }
}
