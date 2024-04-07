import {NextRequest} from "next/server";
import {DB} from "@/app/api/utils/supabase";
import {NextApiRequest} from "next";
import {PAGE_INDEX_STR_DEFAULT, PAGE_SIZE_STR_DEFAULT} from "@/app/api/utils/consts";

// get list https://wangjun.dev/2023/07/nextjs-13-question/
export async function GET(req: NextApiRequest) {
    const {searchParams} = new URL(req.url!);

    const category = searchParams.get("category");

    const pageIndex: number = Number.parseInt(searchParams.get('pageIndex') ?? PAGE_INDEX_STR_DEFAULT);
    const pageSize: number = Number.parseInt(searchParams.get('pageSize') ?? PAGE_SIZE_STR_DEFAULT);
    const from = pageIndex * pageSize;
    const to = (pageIndex + 1) * pageSize;

    const supabase = DB.getSupabase();

    const {data: t} = await supabase.from("goods").select().range(from, to);
    if (!t) {
        return Response.json({code: 401, msg: "", data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data: t}})
}

// 新增
export async function POST(req: NextApiRequest) {
    // const data = await res.json()
    const supabase = DB.getSupabase();
    const {data: t} = await supabase.from("test").select();
    if (!t) {
        return Response.json({code: 401, msg: "", data: ""});
    }
    return Response.json({code: 200, msg: "", data: {data: t}})
}
