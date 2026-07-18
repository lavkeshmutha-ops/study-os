import { NodeType } from "@prisma/client";

export interface ParsedNode {
  title: string;
  slug: string;
  nodeType: NodeType;
  order: number;
  children: ParsedNode[];
}

export class SyllabusParserService {
  /**
   * Parses a plain text syllabus into a structured hierarchy of KnowledgeNodes.
   * This is a simple implementation that expects Markdown-like headers:
   * # Chapter Name
   * ## Topic Name
   * ### Subtopic Name
   * 
   * In a real production scenario, this could be replaced with an LLM call.
   */
  parse(text: string): ParsedNode[] {
    const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    
    const rootNodes: ParsedNode[] = [];
    const stack: { node: ParsedNode; level: number }[] = [];
    
    let orderCounter = 0;

    for (const line of lines) {
      const match = line.match(/^(#+)\s+(.*)$/);
      if (!match) continue; // Skip non-heading lines for now

      const level = match[1].length; // number of '#'
      const title = match[2].trim();
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      let nodeType: NodeType = NodeType.CONCEPT;
      if (level === 1) nodeType = NodeType.CHAPTER;
      else if (level === 2) nodeType = NodeType.TOPIC;
      else if (level === 3) nodeType = NodeType.SUBTOPIC;

      const node: ParsedNode = {
        title,
        slug,
        nodeType,
        order: ++orderCounter,
        children: []
      };

      // Pop from stack until we find a parent that is strictly less deep (level < current level)
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        rootNodes.push(node);
      } else {
        stack[stack.length - 1].node.children.push(node);
      }

      stack.push({ node, level });
    }

    return rootNodes;
  }
}

export const syllabusParserService = new SyllabusParserService();
