import { CSS2DRenderer, CSS2DObject } from './CSS2DRenderer.js';

const Graph = ForceGraph3D({
  extraRenderers: [new CSS2DRenderer()]
})
(document.getElementById('3d-graph'))
    .jsonUrl("./database.json")
    .backgroundColor("#599CFF")
    .linkCurvature(.25)
    .linkOpacity(1.0)
    .numDimensions(3)
    .nodeAutoColorBy('group')
    .nodeThreeObject(node => {
      const nodeEl = document.createElement('div');
      nodeEl.textContent = node.name;
      nodeEl.style.color = node.color;
      nodeEl.className = 'node-label';
      return new CSS2DObject(nodeEl);
    })
    .nodeThreeObjectExtend(true)