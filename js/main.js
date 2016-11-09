! function() {
    "use strict";

    var app = angular.module("myApp", []);
    app.controller('schemController', ['$scope', function($scope) {
        // Polyfill the "includes" method for FireFox and IE
        if (!String.prototype.includes) {
            String.prototype.includes = function(search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
        }
        // Constructor for schematics cuts
        var Cut = (function() {
            function Cut(piece_length, piece_num, lumber_size, angle_right, angle_left) {
                this.piece_length = piece_length;
                this.piece_num = piece_num;
                this.lumber_size = lumber_size;
                this.angle_left = angle_left;
                this.angle_right = angle_right;
            }
            return Cut;
        }());
        // Database of schematics' measurements and properties
        $scope.schematics = [{
            name: "Backed Bench",
            cut_quant: 4,
            image: "http://i.imgur.com/ZGL2MjL.png",
            cuts: [
                new Cut(60, 7, "size_2x6", 0, 0),
                new Cut(17, 8, "size_2x6", 0, 0),
                new Cut(35, 2, "size_2x6", 10, 0),
                new Cut(72, 2, "size_2x6", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Backed Bench with Armrest",
            cut_quant: 7,
            image: "http://i.imgur.com/ufMtPF3.png",
            cuts: [
                new Cut(72, 8, "size_2x4", 0, 0),
                new Cut(60, 1, "size_2x4", 0, 0),
                new Cut(36.5, 2, "size_2x4", 0, 0),
                new Cut(21, 2, "size_2x4", 0, 0),
                new Cut(19.5, 4, "size_2x4", 0, 0),
                new Cut(16.5, 6, "size_2x4", 0, 0),
                new Cut(14, 2, "size_2x4", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Concreted Simple Bench",
            cut_quant: 3,
            image: "http://i.imgur.com/ilZCQuO.png",
            cuts: [
                // Alternate code that doesn't use the "Cut" constructor
                {
                    piece_length: 72,
                    piece_num: 1,
                    lumber_size: "size_2x12",
                    angle_left: 0,
                    angle_right: 0
                }, {
                    piece_length: 36,
                    piece_num: 3,
                    lumber_size: "size_4x4",
                    angle_left: 0,
                    angle_right: 0
                }, {
                    piece_length: 66,
                    piece_num: 2,
                    lumber_size: "size_2x4",
                    angle_left: 0,
                    angle_right: 0
                }
            ],
            special_lumber: false
        }, {
            name: "Picnic Table 2 Legs",
            cut_quant: 5,
            image: "http://i.imgur.com/pO3P9gm.png",
            cuts: [
                new Cut(66, 2, "size_2x6", 38, 38),
                new Cut(39.5, 4, "size_2x6", 38, -38),
                new Cut(34.25, 4, "size_2x4", 38, 38),
                new Cut(32, 2, "size_2x4", 26, -26),
                new Cut(96, 10, "size_2x6", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Double Planter Bench",
            cut_quant: 9,
            image: "http://i.imgur.com/G3Icibn.png",
            cuts: [
                new Cut(22.5, 26, "size_2x4", 0, 0),
                new Cut(21, 12, "size_2x4", 0, 0),
                new Cut(17, 8, "size_2x4", 0, 0),
                new Cut(14, 4, "size_2x4", 0, 0),
                new Cut(24, 8, "size_2x4", 45, -45),
                new Cut(96, 1, "size_2x4", 0, 0),
                new Cut(93, 1, "size_2x4", 0, 0),
                new Cut(45, 5, "size_2x4", 0, 0),
                new Cut(21, 14, "size_2x4", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Garden Box (24\" x 6')",
            cut_quant: 5,
            image: "http://i.imgur.com/NzpKd0M.png",
            cuts: [
                new Cut(72, 2, "size_2x4", 45, -45),
                new Cut(70.5, 12, "size_2x4", 0, 0),
                new Cut(24, 2, "size_2x4", 45, -45),
                new Cut(22.5, 12, "size_2x4", 0, 0),
                new Cut(21, 4, "size_2x4", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Planter Box",
            cut_quant: 2,
            image: "http://i.imgur.com/ZMcbcD6.png",
            cuts: [
                new Cut(96, 4, "size_4x4", 0, 0),
                new Cut(48, 4, "size_4x4", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Bike Rack",
            cut_quant: 4,
            image: "http://i.imgur.com/rzfEgT9.png",
            cuts: [
                new Cut(48, 2, "size_4x4", 0, 0),
                new Cut(34.5, 8, "size_2x4", 0, 0),
                new Cut(56, 1, "size_2x4", 0, 0),
                new Cut(63, 1, "size_2x4", 0, 0)
            ],
            special_lumber: false
        }, {
            name: "Picnic Table 3 Leg",
            cut_quant: 5,
            image: "http://i.imgur.com/B0H0jBA.png",
            cuts: [
                new Cut(66, 3, "size_2x6", 38, -38),
                new Cut(39.5, 6, "size_2x6", 38, 38),
                new Cut(34.25, 5, "size_2x4", 38, -38),
                new Cut(32, 2, "size_2x4", 26, 26),
                new Cut(96, 10, "size_2x6", 0, 0)
            ],
            special_lumber: false
        },
        {
            name: "Toddler Picnic Table",
            cut_quant: 6,
            image: "http://i.imgur.com/1BzZFwm.png",
            cuts: [
                new Cut(64, 2, "size_2x6", 45, 135),
                new Cut(60, 9, "size_2x6", 0, 0),
                new Cut(45, 1, "size_2x6", 0, 0),
                new Cut(28, 4, "size_2x6", 38, 38),
                new Cut(29.5, 2, "size_2x4", 45, 135),
                new Cut(29.5, 1, "size_2x4", 0, 0)
            ],
            special_lumber: false
        },
        {
            name: "Dolly",
            cut_quant: 2,
            image: "http://i.imgur.com/pcKJXOo.png",
            cuts: [
                new Cut(24, 4, "size_2x4", 0, 0),
                new Cut(60, 2, "size_2x4", 0, 0)
            ],
            special_lumber: true
        }];
        // Lumber sizes for the data function which is used by the table_row_maker function
        $scope.lumberSizes = [
            "2\" x 4\" x 8\'",
            "2\" x 6\" x 8\'",
            "2\" x 8\" x 8\'",
            "2\" x 12\" x 8\'",
            "4\" x 4\" x 8\'",
            "2\" x 4\" x 10\'",
            "2\" x 6\" x 10\'",
            "2\" x 8\" x 10\'",
            "2\" x 12\" x 10\'",
            "4\" x 4\" x 10\'",
            "2\" x 4\" x 12\'",
            "2\" x 6\" x 12\'",
            "2\" x 8\" x 12\'",
            "2\" x 12\" x 12\'",
            "4\" x 4\" x 12\'"
        ];
        // Home Depot links; this array needs to match up with the $scope.lumberSizes array
        $scope.HomeDepotLinks = [
            "http://www.homedepot.com/p/WeatherShield-2-in-x-4-in-x-8-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-020408P/206935184",
            "http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-8-ft-2-Prime-Pressure-Treated-Lumber-2311253/100018427",
            "http://www.homedepot.com/p/2-in-x-8-in-x-8-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937455",
            "http://www.homedepot.com/p/2-in-x-12-in-x-8-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-112851/206964340",
            "http://www.homedepot.com/p/Pressure-Treated-Timber-2-Southern-Yellow-Pine-Common-4-in-x-4-in-x-8-ft-Actual-3-56-in-x-3-56-in-x-96-in-194354/205220341",
            "http://www.homedepot.com/p/WeatherShield-2-in-x-4-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253920/206967803",
            "http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253921/206967800",
            "http://www.homedepot.com/p/2-in-x-8-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937440",
            "http://www.homedepot.com/p/2-in-x-12-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-112851/206964329",
            "http://www.homedepot.com/p/4-in-x-4-in-x-10-ft-2-Pressure-Treated-Timber-4220254/100025396",
            "http://www.homedepot.com/p/WeatherShield-2-in-x-4-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253920/206967813",
            "http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253921/206967802",
            "http://www.homedepot.com/p/2-in-x-8-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937453",
            "http://www.homedepot.com/p/2-in-x-12-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-112851/206964330",
            "http://www.homedepot.com/p/4-in-x-4-in-x-12-ft-2-Pressure-Treated-Timber-4230254/100073070"
        ];
        // Lumber prices. Ideally would use Home Depot API to import live prices
        $scope.lumberPrices = {
            size_2x4: {
                price_8: 4.57,
                price_10: 5.67,
                price_12: 6.97
            },
            size_2x6: {
                price_8: 5.97,
                price_10: 7.47,
                price_12: 8.87
            },
            size_2x8: {
                price_8: 7.97,
                price_10: 9.87,
                price_12: 11.67
            },
            size_2x12: {
                price_8: 18.97,
                price_10: 22.97,
                price_12: 28.57
            },
            size_4x4: {
                price_8: 8.67,
                price_10: 12.77,
                price_12: 15.27
            }
        };
        // Set preview-image to blank by default
        document.getElementById('preview-image').src = "http://i.imgur.com/9n8a24l.png";
        // Changes preview image when different schematic is selected
        $scope.schem_change = function(schem_selected) {
            var numberOfSchematics = $scope.schematics.length;
            var schematics = $scope.schematics;
            var screen_width = window.innerWidth;
            var preview = $('#preview-image');
            // Animation functions
            function clickBig() {
                if (screen_width > 991) {
                    preview.width(700);
                } else if (screen_width > 767) {
                    preview.width(580);
                } else if (screen_width > 100) {
                    preview.width("77%");
                }
            }

            function hoverBig() {
                if (screen_width > 767) {
                    preview.width(55);
                } else if (screen_width > 100) {
                    preview.width(40);
                }
            }

            function small() {
                if (screen_width > 991) {
                    preview.width(50);
                } else if (screen_width > 767) {
                    preview.width(50);
                } else if (screen_width > 100) {
                    preview.width(36);
                }
            }

            function keepBig() {
                preview.mouseenter(function() {
                    clickBig();
                });
                preview.mouseleave(function() {
                    clickBig();
                });
            }

            function hoverEnlarge() {
                preview.mouseenter(function() {
                    hoverBig();
                });
                preview.mouseleave(function() {
                    small();
                });
            }
            // Changes image when different schematic is selected
            for (var i = 0; i < numberOfSchematics; i++) {
                if (schem_selected === schematics[i].name) {
                    document.getElementById('preview-image').src = schematics[i].image;
                    if (screen_width > 767) {
                        preview.animate({
                            width: '100px'
                        }, 300);
                        preview.animate({
                            width: '50px'
                        }, 400);
                    } else if (screen_width > 100) {
                        preview.animate({
                            width: '60px'
                        }, 300);
                        preview.animate({
                            width: '36px'
                        }, 400);
                    }
                    preview.css({
                        cursor: 'pointer'
                    });
                    hoverEnlarge();
                }
            }
            // Enlarge image on click
            preview.click(function enlargePreviewOnCLick() {
                keepBig();
                if (document.getElementById('preview-image').width < 60) {
                    clickBig();
                    $('#overlay').fadeIn('fast');
                    preview.css({
                        cursor: 'default'
                    });
                }
            });
            // Closes image when user clicks on or outside of the image, or presses esc
            $('#preview-image, #overlay').click(function closePreviewOnClick() {
                if (document.getElementById('preview-image').width > 60) {
                    small();
                    hoverEnlarge();
                    $('#overlay').fadeOut('fast');
                    preview.css({
                        cursor: 'pointer'
                    });
                }
            });
            $(document).on('keyup', function closePreviewOnEscKey(evt) {
                if (evt.keyCode == 27) {
                    if (document.getElementById('preview-image').width > 60) {
                        small();
                        hoverEnlarge();
                        $('#overlay').fadeOut('fast');
                        preview.css({
                            cursor: 'pointer'
                        });
                    }
                }
            });
        };
        // Variables for the Calculator function
        function var_init() {
            function makeCalcVars(sizeFeet) {
                $scope["lum_quant_" + sizeFeet] = [];
                $scope["total_scrap_" + sizeFeet] = [];
                $scope["total_cost_" + sizeFeet] = [];
            }
            for (var i = 8; i <= 12; i += 2) {
                makeCalcVars(i);
            }
            $scope.summary_rows = [];
        }

        function theCalculator(schem, quant) {
            // Calculate total quantity, minimum cost, and minimum scrap for each lumber size
            function mathHeavyStuff(sizeFeet, sizeInches, i) {
                $scope["lum_quant_" + sizeFeet].push((Math.ceil((schem.cuts[i].piece_num * quant) / Math.floor(sizeInches / schem.cuts[i].piece_length))));
                $scope["total_cost_" + sizeFeet].push(Number(($scope["lum_quant_" + sizeFeet][i] * $scope.lumberPrices[schem.cuts[i].lumber_size]["price_" + sizeFeet])));
                $scope["total_scrap_" + sizeFeet].push(($scope["lum_quant_" + sizeFeet][i] * sizeInches) - (schem.cuts[i].piece_num * quant * schem.cuts[i].piece_length));
            }
            for (var i = 0; i < schem.cuts.length; i++) {
                mathHeavyStuff(8, 96, i);
                mathHeavyStuff(10, 120, i);
                mathHeavyStuff(12, 144, i);
                // Optimize by cost; selects the lumber sizes (8, 10, or 12 ft) with lowest cost
                for (var j = 8; j <= 12; j += 2) {
                    if ($scope["total_cost_" + j][i] == Math.min($scope.total_cost_8[i], $scope.total_cost_10[i], $scope.total_cost_12[i])) {
                        $scope.summary_rows[i] = [
                            schem.cuts[i].lumber_size.replace(/size_(\d{1,})x(\d{1,})/, '$1" x $2"') + " x " + j + "'",
                            $scope["lum_quant_" + j][i],
                            $scope["total_cost_" + j][i],
                            $scope["total_scrap_" + j][i]
                        ];
                    }
                }
            }
        }
        // Sort table data so that like-rows can be combined
        function sort_data(datasets, schem) {
            var cut_data = $scope.summary_rows;
            var number_of_cuts = schem.cuts.length;
            var lumberSizes = $scope.lumberSizes;
            for (var a = 0; a < lumberSizes.length; a++) {
                for (var i = 0; i < number_of_cuts; i++) {
                    if (cut_data[i][0].includes(lumberSizes[a])) {
                        datasets.push(cut_data[i]);
                    }
                }
            }
        }
        // Combines rows of the same lumber size, aggregating cost and scrap
        function row_combiner(datasets) {
            for (var i = 0; i < datasets.length; i++) {
                if (i > 0) {
                    // Use the array.reduce method here
                    if (datasets[i][0] === datasets[i - 1][0]) {
                        datasets[i][1] += datasets[i - 1][1];
                        datasets[i][2] += datasets[i - 1][2];
                        datasets[i][3] += datasets[i - 1][3];
                        datasets[i - 1] = undefined;
                    }
                }
            }
            var count = 0;
            for (var k = 0; k < datasets.length; k++) {
                if (datasets[k] === undefined) {
                    count++;
                }
            }
            var j = 0;
            var data_num = datasets.length;
            while (count > 0 && j < data_num) {
                if (datasets[j] === undefined) {
                    datasets.splice(j, 1);
                    j = 0;
                    data_num--;
                } else {
                    j++;
                }
            }
        }
        // Decimal adjust functions for formatting data
        /*
         * Credit for decimalAdjust functions:
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
         */
        function decimalAdjust(type, value, exp) {
            // If the exp is undefined or zero...
            if (typeof exp === 'undefined' || +exp === 0) {
                return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // If the value is not a number or the exp is not an integer...
            if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                return NaN;
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        }
        // Decimal round
        if (!Math.round10) {
            Math.round10 = function(value, exp) {
                return decimalAdjust('round', value, exp);
            };
        }
        // Decimal floor
        if (!Math.floor10) {
            Math.floor10 = function(value, exp) {
                return decimalAdjust('floor', value, exp);
            };
        }
        // Decimal ceil
        if (!Math.ceil10) {
            Math.ceil10 = function(value, exp) {
                return decimalAdjust('ceil', value, exp);
            };
        }
        // Format the currency and inches data using decimal adjust functions
        function formatter(datasets) {
            for (var key in datasets) {
                datasets[key][2] = Math.ceil10(datasets[key][2], -2);
                datasets[key][2] = "$" + datasets[key][2];
                if (datasets[key][2][datasets[key][2].indexOf(".") + 2] === undefined) {
                    datasets[key][2] += "0";
                }
                datasets[key][3] = Math.ceil10(datasets[key][3], -1) + "\"";
            }
        }
        // Calculates total order cost
        function total_order_cost_calc(datasets) {
            $scope.total_order_cost = 0;
            // Combines all the costs
            for (var key in datasets) {
                $scope.total_order_cost += datasets[key][2];
            }
            // Formats cost in a currency style
            // Uses decimalAdjust functions above, from the Mozilla Developer Network
            $scope.total_order_cost = "$" + Math.ceil10($scope.total_order_cost, -2);
            if ($scope.total_order_cost[$scope.total_order_cost.indexOf(".") + 2] === undefined) {
                $scope.total_order_cost += "0";
            }
        }
        // Calculates total order scrap
        function total_order_scrap_calc(datasets) {
            $scope.total_order_scrap = 0;
            // Combines all the scrap
            for (var key in datasets) {
                $scope.total_order_scrap += datasets[key][3];
            }
        }
        // Creates table data cells
        function data(data_row) {
            var a = "";
            var lumberSizes = $scope.lumberSizes;
            var HD_links = $scope.HomeDepotLinks;
            for (var j = 0; j < data_row.length; j++) {
                var val = data_row[j];
                if (j === 0) {
                    for (var i = 0; i < lumberSizes.length; i++) {
                        if (val == lumberSizes[i]) {
                            a += '<td><a target="blank" title="View this lumber size on The Home Depot website" href="' + HD_links[i] + '">' + lumberSizes[i] + '</a></td>';
                        }
                    }
                } else {
                    a += '<td>' + val + '</td>';
                }
            }
            return a;
        }

        function reset_table() {
            $('#summary').empty(this);
            // Add table headings
            $('#summary').append('<thead><tr><th style="text-align: center;">Size</th><th style="text-align: center;">Quantity</th><th style="text-align: center;">Total Cost</th><th style="text-align: center;">Total Scrap</th></tr></thead>');
        }
        // Creates the last row of the table
        function totals_row_maker(datasets) {
            var total_cost = $scope.total_order_cost;
            var total_quant = 0;
            var total_scrap = $scope.total_order_scrap + '\"';
            for (var prop in datasets) {
                total_quant += datasets[prop][1];
            }
            $('#summary').append('<tfoot class="totals-row"><tr><th class="total-cell">Totals:</th><td class="total-cell">' + total_quant + '</td><td class="total-cell">' + total_cost + '</td><td class="total-cell">' + total_scrap + '</td></tr></tfoot>');
        }
        // Puts table data cells into HTML table rows; calls reset_table; calls totals_row_maker
        function table_maker(datasets) {
            reset_table();
            for (var i = 0; i < datasets.length; i++) {
                $('#summary').append('<tr style="text-align: center">' + data(datasets[i]) + '</tr>');
            }
            totals_row_maker(datasets);
            $('#table-div').slideDown();
        }
        // Creates the cut list below the table
        function create_cut_list(data, schem) {
            document.getElementById('cut_list').innerHTML = "";
            document.getElementById('cut_list_h3').style.display = 'block';
            var cuts = schem.cuts;
            var current_plank;
            var current_plank_id;
            var current_plank_width;
            var cut;
            var current_cut_class;
            var cut_width;
            var pieces_per_plank;
            var scrap;
            var current_scrap_id;
            var scrap_width;

            function setPlankWidth(i, widthFT) {
                current_plank_width = widthFT / 12 * 90;
                $("#" + current_plank_id).css("width", current_plank_width + "%");
                $("#cc_" + i).append('<p class="lum-length">' + widthFT + ' ft</p>');
            }

            function setCutWidth(i, widthIN) {
                cut_width = (cuts[i].piece_length / widthIN) * 100;
                pieces_per_plank = Math.floor(widthIN / cuts[i].piece_length);
            }

            function setPlankHeight(height) {
                $("#" + current_plank_id).addClass("plank-height-" + height);
                $("." + current_cut_class).addClass("plank-height-" + height);
                $("#" + current_scrap_id).addClass("plank-height-" + height);
                $("." + current_cut_class + " p").addClass("size" + height);
            }
            for (var i = 0; i < cuts.length; i++) {
                current_plank_id = "plank" + i;
                current_cut_class = "cut" + i;
                current_scrap_id = "scrap" + i;
                current_plank = '<div class="plank" id="' + current_plank_id + '"></div>';
                // Append html elements
                $("#cut_list").append('<div class="cut-container" id="cc_' + i + '"></div>');
                if (cuts[i].angle_left !== 0 || cuts[i].angle_right !== 0) {
                    $("#cc_" + i).append('<p class="lum-size">' + data[i][0] + " - angled cuts" + '</p>');
                } else {
                    $("#cc_" + i).append('<p class="lum-size">' + data[i][0] + '</p>');
                }
                $("#cc_" + i).append('<p class="lum-quant">' + data[i][1] + ' of</p>');
                $("#cc_" + i).append(current_plank);
                // Set plank width and cut width
                if (data[i][0].includes("8'")) {
                    setPlankWidth(i, 8);
                    setCutWidth(i, 96);
                } else if (data[i][0].includes("10'")) {
                    setPlankWidth(i, 10);
                    setCutWidth(i, 120);
                } else if (data[i][0].includes("12'")) {
                    setPlankWidth(i, 12);
                    setCutWidth(i, 144);
                }
                // Display cuts
                for (var j = 0; j < pieces_per_plank; j++) {
                    cut = '<div class="cut ' + current_cut_class + '" style="width: ' + cut_width + '%">' + '<p>' + cuts[i].piece_length + '"</p>' + '</div>';
                    $("#" + current_plank_id).append(cut);
                }
                // Display scrap
                scrap_width = 100 - (pieces_per_plank * cut_width);
                if (scrap_width > 0.1) {
                    scrap = '<div class="cut scrap" id="' + current_scrap_id + '"style="width: ' + scrap_width + '%"></p>' + '</div>';
                    $("#" + current_plank_id).append(scrap);
                }
                // Set plank height
                if (data[i][0].includes('x 4\"')) {
                    setPlankHeight(4);
                } else if (data[i][0].includes('x 6\"')) {
                    setPlankHeight(6);
                } else if (data[i][0].includes('x 8\"')) {
                    setPlankHeight(8);
                } else if (data[i][0].includes('x 12\"')) {
                    setPlankHeight(12);
                }
            }
        }
        // Calls all the above functions when the "Calculate" button is clicked
        $scope.btn_press = function(quantity, schem_selected) {
            if ($scope.quantity === undefined || $scope.schem_selected === undefined) {
                document.getElementById('validate').innerHTML = "Please fill out all fields";
            } else {
                document.getElementById('validate').innerHTML = "";
                var_init();
                for (var i = 0; i < $scope.schematics.length; i++) {
                    if ($scope.schem_selected === $scope.schematics[i].name) {
                        $scope.current_schem = $scope.schematics[i];
                    }
                }
                $("#table-div, #cut_list, #cut_list_h3").slideUp(500).promise().done(function runMainFunctions() {
                    // Calculates optimal lumber order
                    theCalculator($scope.current_schem, $scope.quantity);
                    // Creates cut list
                    create_cut_list($scope.summary_rows, $scope.current_schem);
                    // Sort the rows by lumber size so like-rows can be combined
                    var datasets = [];
                    sort_data(datasets, $scope.current_schem);
                    // Combines like-rows by aggregating costs and scrap
                    row_combiner(datasets);
                    // Calculates totals row
                    total_order_cost_calc(datasets);
                    total_order_scrap_calc(datasets);
                    // Formats the currency and inches data
                    formatter(datasets);
                    // Creates HTML to display data in table
                    table_maker(datasets);
                    $("#table-div").slideDown(function() {
                        $('#cut_list, #cut_list_h3').slideDown();
                    });
                });
            }
        };
    }]);
    $(document).ready(function() {
        // Menu controls
        (function setMenuControls() {
            var menu_items = $('#menu-items');

            function show_menu() {
                $("#overlay").css("z-index", "3");
                $("#overlay").fadeIn(200);
                menu_items.animate({
                    left: "0"
                }, 200);
                menu_items.css("box-shadow", "0 1rem 2.5rem");
                menu_items.show();
            }

            function hide_menu() {
                if (window.innerWidth < 768) {
                    menu_items.animate({
                        left: "-16rem"
                    }, 200);
                } else {
                    menu_items.animate({
                        left: "-22rem"
                    }, 200);
                }
                menu_items.css("box-shadow", "none");
                menu_items.fadeOut(200);
                $("#overlay").fadeOut(200);
                $("#overlay").css("z-index", "1");
            }
            $("#menu-button button").click(function() {
                show_menu();
            });
            $("#menu-items .menu-header .close, #overlay").click(function() {
                hide_menu();
            });
            // Nav controls
            var title = $('header nav p span');

            function navControlsHandler(thisNavBtn, otherPages, thisPage, otherNavBtns, titleCursorSetting, pageContent) {
                thisNavBtn.click(function() {
                    if (!thisNavBtn.hasClass("active")) {
                        hide_menu();
                        otherPages.fadeOut(500).promise().done(function() {
                            thisPage.fadeIn(500);
                        });
                        title.mouseenter(function() {
                            title.css("cursor", titleCursorSetting);
                        });
                        thisNavBtn.addClass("active");
                        otherNavBtns.removeClass("active");
                    }
                });
            }
            // Click on About
            navControlsHandler($("#about-li"), $("#calculator, #math"), $("#about"), $("#calculator-li, #math-li"), "pointer");
            // Click on calculator
            navControlsHandler($("#calculator-li"), $("#about, #math"), $("#calculator"), $("#about-li, #math-li"), "default");
            // Click on Check the Math
            navControlsHandler($("#math-li"), $("#about, #calculator"), $("#math"), $("#about-li, #calculator-li"), "pointer");
            // Click on title
            title.click(function navControls() {
                if (!$("calculator-li").hasClass("active")) {
                    $("#about, #math").fadeOut(500).promise().done(function() {
                        $("#calculator").fadeIn(500);
                    });
                    title.mouseenter(function() {
                        title.css("cursor", "default");
                    });
                    $("#calculator-li").addClass("active");
                    $("#about-li, #math-li").removeClass("active");
                }
            });
        })();
    });
    $(document).ready(function() {
        $('body').fadeIn('slow', function() {
            $('#calculator').fadeIn('slow');
        });
        $(function() {
            // This will select everything with the class smoothScroll
            // This should prevent problems with carousel, scrollspy, etc...
            $('.smoothScroll').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 500); // The number here represents the speed of the scroll in milliseconds
                        return false;
                    }
                }
            });
        });
        //Check to see if the window is top if not then display button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top a').fadeIn();
            } else {
                $('.back-to-top a').fadeOut();
            }
        });
        //Click event to scroll to top
        $('.back-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });


}();
