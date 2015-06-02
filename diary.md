
From wikipedia:

cut vertices can be connected to multiple biconnected components.

The Polish mathematician Kazimierz Kuratowski provided a characterization of planar graphs in terms of forbidden graphs, now known as Kuratowski's theorem:

graph: graph G(V, E) is an ordered pair consisting of a finite set V of vertices and a finite set
E of edges, that is, pairs (u, v) of vertices. If each edge is an unordered (ordered) pair of
vertices, then the graph is undirected (directed).

A (rooted) tree T is a connected acyclic graph with one distinguished vertex, called the
root r. A spanning tree of a graph G is a tree T such that V (T) = V (G) and E(T) ⊆ E(G).
Given two graphs G1(V1, E1) and G2(V2, E2), their union G1 ∪ G2 is the graph G(V1 ∪
V2, E1 ∪ E2). Analogously, their intersection G1 ∩ G2 is the graph G(V1 ∩ V2, E1 ∩ E2). A
graph G2 is a subgraph of G1 if G1 ∪ G2 = G1.

Given a graph G(V, E) and a subset V ′ of V , the subgraph induced by V′ is the graph G′(V′, E′), where E′
is the set of edges of E that have both endvertices in V′. Given a graph G(V, E) and a subset E′ of E, the subgraph
induced by E′ is the graph G′(V′, E′), where V′ is the set of vertices incident to E′. A subdivision of an edge (u, v)
consists of the insertion of a new node w and the replacement of (u, v) with edges (u, w) and (w, v). A graph G2
is a subdivision of G1 if it can be obtained from G1 through a sequence of edge subdivisions.

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

graphing in JS: http://www.graphdracula.net/

Three.js has vectors. http://threejs.org/examples/webgl_geometry_shapes.html

approaches to Euler's formula: http://www.ics.uci.edu/~eppstein/junkyard/euler/


figure out how to represent vertices, edges, graphs. create utility functions and sketch algorithm from there?

graph drawing, planarity test, etc. in Java: http://www.jharris.ca/JGraphEd/#source
