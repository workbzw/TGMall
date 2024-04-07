import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {NextRequest} from "next/server";
import {DB} from "@/app/api/utils/supabase";
// get list
export async function GET(req: NextRequest) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data:t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "",data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data:t}})
}
// 新增
export async function POST(req: NextRequest) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data:t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "",data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data:t}})
}
