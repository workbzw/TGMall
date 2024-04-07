import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {NextRequest} from "next/server";
import {DB} from "@/app/api/utils/supabase";
// get by id
export async function GET(req: NextRequest, {params:{id}}: { params: { id: string } }) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data: t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "", data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data: t}})
}
// 修改 by id
export async function PUT(req: NextRequest, {params:{id}}: {params: {id:string}}) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data: t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "", data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data: t}})
}
//删除 by id
export async function DELETE(req: NextRequest, {params:{id}}: {params: {id:string}}) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data: t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "", data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data: t}})
}
