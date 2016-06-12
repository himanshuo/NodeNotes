if (!Array.prototype.remove) {
    Array.prototype.remove = function(val) {
        var i = this.indexOf(val);
        return i > -1 ? this.splice(i, 1) : [];
    };
}

graph = {
        "A": ["B"],
        "B": ["C", "D"],
        "C": [],
        "D": [],
        "E": ["F"],
        "F": [],
    }
// graph = {
//     "C": [],
//     "F": [],
//     "G": [],
//     "H": ["E", "G"],
//     "A": ["B"],
//     "B": ["C", "F", "G"],
//     "D": ["B", "E"],
//     "E": ["F"],
// }


function print_graph(graph) {
    console.log("------------------GRAPH------------------");
    for (var node in graph) {
        var out = node + "->";
        var children = graph[node];
        for (i in children) {
            if (typeof(children[i]) == "string") {
                out += children[i] + ",";
            }
        }
        console.log(out);
    }
}

function get_start_nodes(graph) {
    var potential = Object.keys(graph);
    for (var node in graph) {
        for (var i in graph[node]) {
            potential.remove(graph[node][i]);
        }
    }
    return potential;
}

function bfs(top, out) {
    var q = [top]; //[first, ... , last]
    while (q.length > 0) {
        //q.pop
        var cur = q[0];
        q = q.slice(1, q.length);
        //   //if cur not already visited
        if (out.indexOf(cur) < 0) {
            //     //put cur in output
            out.push(cur);
            // add children of cur into q
            for (var i = 0; i < graph[cur].length; i++) {
                q.push(graph[cur][i]);
            }
        }
    }
}

function determine_innodes(graph) {
    var out = {};
    for (key in graph) {
        out[key] = 0;
        for (k in graph) {
            if (graph[k].indexOf(key) > -1) {
                out[key] += 1;
            }
        }
    }
    return out;
}

function done(innodes) {
    for (node in innodes) {
        if (innodes[node] != -1) {
            return false;
        }
    }
    return true;
}

function find_next_open(innodes) {
    for (k in innodes) {
        if (innodes[k] == 0) {
            return k;
        }
    }
}

function toposort(graph) {
    var out = [];
    var innodes = determine_innodes(graph);
    var count = 0;
    while (!done(innodes)) {
        var cur = find_next_open(innodes);
        out.push(cur);
        innodes[cur] -= 1;
        for (var i = 0; i < graph[cur].length; i++) {
            innodes[graph[cur][i]]--;
        }
    }
    return out;
}

console.log(toposort(graph));
