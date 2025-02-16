'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import PlaygroundEditorTheme from '../Editor/themes/PlaygroundEditorTheme';
import { SharedHistoryContext } from '../Editor/context/SharedHistoryContext';
import { TableContext } from '../Editor/plugins/TablePlugin';
import { ToolbarContext } from '../Editor/context/ToolbarContext';
import Editor from '../Editor';
import Settings from '../Editor/Settings';
import TypingPerfPlugin from '../Editor/plugins/TypingPerfPlugin';
import DocsPlugin from '../Editor/plugins/DocsPlugin';
import { FlashMessageContext } from '../Editor/context/FlashMessageContext';
import PlaygroundNodes from '../Editor/nodes/PlaygroundNodes';

function $prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {    

    const paragraph = $createParagraphNode();
    paragraph.append(
      $createTextNode('This is a reusable Lexical editor component. You can customize it as needed.')
    );
    root.append(paragraph);
   
  }
}

export default function LexicalEditor(): JSX.Element {
  const initialConfig = {
    editorState: $prepopulatedRichText,
    namespace: 'LexicalEditor',
    nodes: [...PlaygroundNodes],
    theme: PlaygroundEditorTheme,
    onError: (error: Error) => {
      console.error('Lexical Editor Error:', error);
    },
  };

  return (
    // Playground App
    <FlashMessageContext>
      {/* App  */}
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <TableContext>
            <ToolbarContext>
              <div className="editor-container">
                <Editor />
                <Settings />
                <DocsPlugin />
                <TypingPerfPlugin />
              </div>
            </ToolbarContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer>

    </FlashMessageContext>
    
  );
}
