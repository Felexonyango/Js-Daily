// Graph representation using adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  function dfs(node, visited) {
    if (!visited.includes(node)) {
        
      visited.push(node);
      const neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        
        dfs(neighbors[i], visited);
      }
    }
  }
  
  // Usage
  const visitedNodes = [];
  dfs('A', visitedNodes);
  console.log(visitedNodes);  // Output: ['A', 'B', 'D', 'E', 'F', 'C']
  