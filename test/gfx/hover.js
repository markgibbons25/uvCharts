init = function() {
	var horConfig = { graph: {responsive: true}, 
	          bar: {
          strokecolor: 'none',
          fontfamily: 'Conv_Gotham-Medium',
            fontsize: '20',
            fontweight: '500',
            textcolor: '#FFF'
          },
		  effects: {
            hovercolor: '#FFF',
          strokecolor: 'none',
          textcolor: '#323D47',
          duration: 0,
          hover: 400,
          showhovertext: true
          }};
	var verConfig = { graph: {responsive: true, orientation : 'Vertical'},
	bar: {
          strokecolor: 'none',
          fontfamily: 'Conv_Gotham-Medium',
            fontsize: '20',
            fontweight: '500',
            textcolor: '#FFF'
          },
		  effects: {
            hovercolor: '#FFF',
          strokecolor: 'none',
          textcolor: '#323D47',
          duration: 0,
          hover: 400,
          showhovertext: true
          }};

	var graphdef = new sample.Graphdef();
	var tgraphdef = new sample.Graphdef();
	var waterfallGraphdef = new sample.WaterfallGraphdef();

	function transposeData(graphdef) {
		var dataset = {}, i, j, length, jlength,
			name, label, value, categories = graphdef.dataset[graphdef.categories[0]].map(function (d) { return d.name; });

		for (i = 0, length = categories.length; i < length; i = i + 1) { dataset[categories[i]] = []; }

		for (i = 0, length = graphdef.categories.length; i < length; i = i + 1) {
			name = graphdef.categories[i];
			for (j = 0, jlength = graphdef.dataset[name].length; j < jlength; j = j + 1) {
				label = graphdef.dataset[name][j].name;
				value = graphdef.dataset[name][j].value;
				dataset[label].push({ 'name' : name, 'value' : value });
			}
		}

		graphdef.categories = categories;
		graphdef.dataset = dataset;
	};

	transposeData(tgraphdef);

	
	stackedBarHorTest = uv.chart('StackedBar', graphdef, horConfig);
	tstackedBarHorTest = uv.chart('StackedBar', tgraphdef, horConfig);
	stackedBarVerTest = uv.chart('StackedBar', graphdef, verConfig);
	tstackedBarVerTest = uv.chart('StackedBar', tgraphdef, verConfig);
};
