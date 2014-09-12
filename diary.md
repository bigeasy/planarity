From wikipedia:

cut vertices can be connected to multiple biconnected components.

The Polish mathematician Kazimierz Kuratowski provided a characterization of planar graphs in terms of forbidden graphs, now known as Kuratowski's theorem:

A finite graph is planar if and only if it does not contain a subgraph that is a subdivision of K5 (the complete graph on five vertices) or K3,3 (complete bipartite graph on six vertices, three of which connect to each of the other three, also known as the utility graph).
A subdivision of a graph results from inserting vertices into edges (for example, changing an edge •——• to •—•—•) zero or more times.



Algorithm accepts a graph G from which each edge is added to a structure to maintain biconnected components. Inputs are processed
in the reverse order of the depth-first search indices. This insures that the last vertex processed is the DFS root

edges: http://en.wikipedia.org/wiki/Depth-first_search#Output_of_a_depth-first_search

externally active: Let w denote a DFS descendant of v in, a biconnected component B. We say that w is externally active if there is a path from w to a DFS ancestor u of v consisting of a back edge plus zero or more DFS descendants of w, none of which are in B. This definition does not apply to virtual vertices. Still not sure what this means. Regardless, externally active vertices must remain so after processing, thus the 'flipping' operation which allows adding a "back edge" (which points from a node to one of its ancestors) to connect components while preserving its external face, since we can switch the the side of a biconnected component's external face and use the back edge to link from one biconnected component's external face to another.

pertinence: describes a vertex descendant from from a back edge to be embedded, as well as any cut vertex on the DFS path from beginning to end of the back edge to be embedded. Any vertex along the path that has a pertinent root (a biconnected component in the embedding along the back edge) is also considered pertinent.
