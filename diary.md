From wikipedia:

cut vertices can be connected to multiple biconnected components.

The Polish mathematician Kazimierz Kuratowski provided a characterization of planar graphs in terms of forbidden graphs, now known as Kuratowski's theorem:

A finite graph is planar if and only if it does not contain a subgraph that is a subdivision of K5 (the complete graph on five vertices) or K3,3 (complete bipartite graph on six vertices, three of which connect to each of the other three, also known as the utility graph).
A subdivision of a graph results from inserting vertices into edges (for example, changing an edge •——• to •—•—•) zero or more times.

Algorithm accepts a graph G from which each edge is added to a structure to maintain biconnected components. Inputs are processed
in the reverse order of the depth-first search indices. This insures that the last vertex processed is the DFS root, which I need to go read about since the rest of the paper uses terms relative to DFS ancestors and indices.
