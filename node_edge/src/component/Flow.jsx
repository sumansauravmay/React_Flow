import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 0, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Hello World' },
    position: { x: 100, y: 200 },
  },
  {
    id: '4',
    data: { label: 'Hello react flow' },
    position: { x: 200, y: 300 },
  },
];

const initialEdges = [
  { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
  { id: '2-3', source: '2', target: '3', label: 'smoothstep', type: 'smoothstep' },
  { id: '3-4', source: '3', target: '4', label: 'straight', type: 'straight' },
];

const Flow = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
  
    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [],
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [],
    );



  return (
    <div style={{ height: '100%' }}>
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
  )
}

export default Flow
