import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apikey = process.env.OPENWEATHERMAP_API_KEY;
        const lat = 40.4165;
        const lon = -3.7026;
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

        const res = await axios.get(URL);
        return NextResponse.json(res.data);

    } catch (error) {
        console.log('Error Fetching Forecast Data');
        return new Response("Error fetching forecast data", { status: 500 })

    }
}