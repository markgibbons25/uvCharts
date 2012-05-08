r3.effects = {};

r3.effects.bar = {};
r3.effects.bar.mouseover = function (config) {
	return function () {
		d3.select(this.parentNode.parentNode).selectAll('rect')
			.style('fill', config.effects.hovercolor)
			.style('stroke', config.effects.strokecolor);
	
		d3.select(this.parentNode.parentNode).selectAll('text')
			.style('fill', config.effects.textcolor);
	}
};

r3.effects.bar.mouseout = function (config, color) {
	return function () {
		d3.select(this.parentNode.parentNode).selectAll('rect')
			.style('fill', color)
			.style('stroke', 'none');
	
		d3.select(this.parentNode.parentNode).selectAll('text')
			.style('fill', 'none');
	}
};

r3.effects.line = {};
r3.effects.line.mouseover = function (config) {
	return function () {
		d3.select(this.parentNode).selectAll('circle').style('fill', config.effects.hovercolor);
		d3.select(this.parentNode).selectAll('circle').style('stroke', config.effects.hovercolor);
		d3.select(this.parentNode).select('path').style('stroke', config.effects.hovercolor);
		d3.select(this.parentNode).selectAll('text').style('fill', config.effects.textcolor);
	};
};

r3.effects.line.mouseout = function (config, color) {
	return function () {
		d3.select(this.parentNode).selectAll('circle').style('fill', 'none');
		d3.select(this.parentNode).selectAll('circle').style('stroke', color);
		d3.select(this.parentNode).select('path').style('stroke', color);
		d3.select(this.parentNode).selectAll('text').style('fill', 'none');
	};
};

r3.effects.caption = {};
r3.effects.caption.mouseover = function (config) {
	return function () {
		d3.select(this.parentNode.parentNode).select('.' + r3.constants.name.background).style('fill', config.caption.hovercolor);
	};
};

r3.effects.caption.mouseout = function (config) {
	return function () {
		d3.select(this.parentNode.parentNode).select('.' + r3.constants.name.background).style('fill', config.graph.background);
	};
};

r3.effects.donut = {};
r3.effects.donut.mouseover = function (center, arcfunc, config, d) {
	return function (d) {
		var dev = {
				x : arcfunc.centroid(d)[0] / 5,
				y : arcfunc.centroid(d)[1] / 5
			};

		d3.select(this.parentNode).transition()
			.duration(config.effects.duration)
			.attr('transform', 'translate(' + (center.x + dev.x) + ',' + (center.y + dev.y) + ')');
	};
};

r3.effects.donut.mouseout = function (center, config) {
	return function () {
		d3.select(this.parentNode).transition()
			.duration(config.effects.duration)
			.attr('transform', 'translate(' + center.x + ',' + center.y + ')');
	};
};

r3.effects.pie = {};
r3.effects.pie.mouseover = function (center, arcfunc, config, d) {
	return function (d) {
		var dev = {
				x : arcfunc.centroid(d)[0] / 5,
				y : arcfunc.centroid(d)[1] / 5
			};

		d3.select(this.parentNode).transition()
			.duration(config.effects.duration)
			.attr('transform', 'translate(' + (center.x + dev.x) + ',' + (center.y + dev.y) + ')');
	};
};

r3.effects.pie.mouseout = function (center, config) {
	return function () {
		d3.select(this.parentNode).transition()
			.duration(config.effects.duration)
			.attr('transform', 'translate(' + center.x + ',' + center.y + ')');
	};
};
