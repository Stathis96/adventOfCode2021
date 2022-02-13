module.exports = input => {
    let lines = [];
    input.split('\n').forEach(element => {
        let [start, end] = element.split(' -> ');
        lines.push({
            start: { x: parseInt(start.split(',')[0]), y: parseInt(start.split(',')[1]) },
            end: { x: parseInt(end.split(',')[0]), y: parseInt(end.split(',')[1]) }
        });
    });

    let grid = {};
    lines.forEach(element => {
        let start = {}, end = {};
        if (element.start.x < element.end.x) {
            start = element.start;
            end = element.end;
        } else {
            start = element.end;
            end = element.start;
        }
