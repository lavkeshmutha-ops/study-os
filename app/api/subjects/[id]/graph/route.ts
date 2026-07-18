import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { knowledgeNodeService } from "@/features/subjects";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: subjectId } = await params;

    const graph = await knowledgeNodeService.getSubjectHierarchy(subjectId);
    
    return NextResponse.json({ data: graph });
  } catch (error) {
    console.error("[ACADEMIC_GRAPH_GET]", error);
    return NextResponse.json(
      { error: "Internal Error" },
      { status: 500 }
    );
  }
}
