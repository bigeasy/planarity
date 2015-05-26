From wikipedia:

cut vertices can be connected to multiple biconnected components.

The Polish mathematician Kazimierz Kuratowski provided a characterization of planar graphs in terms of forbidden graphs, now known as Kuratowski's theorem:

graph: graph G(V, E) is an ordered pair consisting of a finite set V of vertices and a finite set
E of edges, that is, pairs (u, v) of vertices. If each edge is an unordered (ordered) pair of
vertices, then the graph is undirected (directed).

A finite graph is planar if and only if it does not contain a subgraph that is a subdivision of K5 (the complete graph on five vertices) or K3,3 (complete bipartite graph on six vertices, three of which connect to each of the other three, also known as the utility graph).
A subdivision of a graph results from inserting vertices into edges (for example, changing an edge •——• to •—•—•) zero or more times.

bipartite graph: has no odd-length cycles, two independent sets of vertices where every edge connects a vertex in one set to one in the other.

Algorithm accepts a graph G from which each edge is added to a structure to maintain biconnected components. Inputs are processed
in the reverse order of the depth-first search indices. This insures that the last vertex processed is the DFS root

edges: http://en.wikipedia.org/wiki/Depth-first_search#Output_of_a_depth-first_search

externally active: Let w denote a DFS descendant of v in, a biconnected component B. We say that w is externally active if there is a path from w to a DFS ancestor u of v consisting of a back edge plus zero or more DFS descendants of w, none of which are in B. This definition does not apply to virtual vertices. Still not sure what this means. Regardless, externally active vertices must remain so after processing, thus the 'flipping' operation which allows adding a "back edge" (which points from a node to one of its ancestors) to connect components while preserving its external face, since we can switch the the side of a biconnected component's external face and use the back edge to link from one biconnected component's external face to another.

pertinence: describes a vertex descendant from from a back edge to be embedded, as well as any cut vertex on the DFS path from beginning to end of the back edge to be embedded. Any vertex along the path that has a pertinent root (a biconnected component in the embedding along the back edge) is also considered pertinent. This is determined by traversing the external face of each biconnected component that contains part of the back edge.

planarity:
For a simple, connected, planar graph with v vertices and e edges, the following simple conditions hold:

Theorem 1. If v ≥ 3 then e ≤ 3v − 6;
Theorem 2. If v ≥ 3 and there are no cycles of length 3, then e ≤ 2v − 4.

Euler:

Euler's formula states that if a finite, connected, planar graph is drawn in the plane without any edge intersections, and v is the number of vertices, e is the number of edges and f is the number of faces (regions bounded by edges, including the outer, infinitely large region), then:

v − e + f = 2.

convexity:
A plane graph is said to be convex if all of its faces (including the outer face) are convex polygons. A planar graph may be drawn convexly if and only if it is a subdivision of a 3-vertex-connected planar graph.
