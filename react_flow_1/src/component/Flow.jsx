import { useState } from 'react';
import ReactFlow, { Controls, Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';

function Flow() {
    const [variants,setVariants]=useState("dots")
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow>
        <Background variant={variants} color='blue' gap="50"/>
        <Controls />
        <Panel>
        <div>variant:</div>
        <button onClick={() => setVariants('dots')}>dots</button>
        <button onClick={() => setVariants('lines')}>lines</button>
        <button onClick={() => setVariants('cross')}>cross</button>
      </Panel>
      </ReactFlow>
    </div>
  );
}

export default Flow;