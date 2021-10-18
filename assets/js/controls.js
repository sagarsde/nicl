"use strict";

const renderMembers = ($) => {
    const memberCategoryMap = [
        { 'category': 'phd', 'label': 'Ph.D.' },
        { 'category': 'mtech', 'label': 'M. Tech.' },
        { 'category': 'mphil', 'label': 'M. Phil' },
        { 'category': 'mca', 'label': 'M.C.A.' },
        { 'category': 'mscit', 'label': 'M.Sc. (IT)' }
    ];
    var members = [{
            'category': 'mphil',
            'name': 'Mr. Akshaya Kumar Mandal',
            'photo': '',
            'thesis': 'Ant Colony Optimization for Solving Some of the Selected NP-hard Problems',
            'year': 2019,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mphil',
            'name': 'Mr. Rupashree Chhotray',
            'photo': '',
            'thesis': 'Unsupervised Learning Techniques in the Context of Big Data Analysis',
            'year': 2019,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mphil',
            'name': 'Mr. Debendra Prasad Rath',
            'photo': '',
            'thesis': 'Fuzzy Rule Minor for Big Data Analysis',
            'year': 2018,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mphil',
            'name': 'Mr. Satyajit Ray',
            'photo': '',
            'thesis': 'S2AMS: Smart Student Attendance Monitoring System',
            'year': 2017,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mphil',
            'name': 'Mr. Bhagyashree Panda',
            'photo': '',
            'thesis': '”Bayesian Model for Classification in Big Data Analysi',
            'year': 2016,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mtech',
            'name': 'Mr. Mohapatra, C.',
            'photo': '',
            'research_title': 'A Comparative Study of K-means, SOM, and DBSCAN Data Clus-tering Algorithm”',
            'year': 2005,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mtech',
            'name': 'Mr. Swarnakar, T.',
            'photo': '',
            'research_title': 'An Efficient ART clustering algorithm for Mining Association Rules',
            'year': 2005,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'mtech',
            'name': 'Mr. Pradhan, D.',
            'photo': '',
            'research_title': 'Genetic Algorithm Based Prototype Selection for Pattern Classification Using Radial Basis Function Network',
            'year': 2005,
            'don': null,
            'subject': 'Computer Science',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        },
        {
            'category': 'phd',
            'name': 'Dr. Madhabananda Das',
            'photo': '',
            'thesis': 'Particle Swarm Optimization for Multi-objective Problems',
            'year': 2010,
            'don': '30/10/2010',
            'subject': 'Computer Science and Engineering',
            'university': 'KIIT University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Bhabani Sankar Prasad Mishra',
            'photo': '',
            'thesis': 'Parallel Single and Multi-objective Genetic Algorithms',
            'year': 2011,
            'don': '23/6/2011',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Ch. Sanjeev Kumar Dash',
            'photo': '',
            'thesis': 'Evolving Neural Networks for Data Mining',
            'year': 2014,
            'don': '1/9/2014',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Satya Ranjan Dash',
            'photo': '',
            'thesis': 'Soft Data Mining for DNA/RNA Structures and their Interaction with Protein in Bioinformatics',
            'year': 2015,
            'don': '20/1/2015',
            'subject': 'Computer Science',
            'university': 'Utkal University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Harihar Kalia',
            'photo': '',
            'thesis': 'Multi-objective Fuzzy Genetic Rule Mining',
            'year': 2015,
            'don': '17/3/2015',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Partha Sarathi Mishra',
            'photo': '',
            'thesis': 'Application of Biologically Inspired Algorithms for Solving Computational Intensive Financial Problems',
            'year': 2015,
            'don': '30/6/2015',
            'subject': 'Computer Science and IT',
            'university': 'North Orissa Universit',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Santipriya Parida',
            'photo': '',
            'thesis': 'Classifying Instantaneous Cognitive States Based on Machine Learning Approach',
            'year': 2016,
            'don': '22/2/2016',
            'subject': 'Computer Science',
            'university': 'Utkal University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Bijaya Kumar Nanda',
            'photo': '',
            'thesis': 'Ant Colony Based Data Mining',
            'year': 2016,
            'don': '20/12/2016',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Sandeep Kumar Satapathy',
            'photo': '',
            'thesis': 'Classification of EEG Brain Signal for Epilepsy Identification Using Machine Learning Techniques',
            'year': 2017,
            'don': '19/1/2017',
            'subject': 'Computer Science and Engineering',
            'university': 'Siksha \'O\' Anusandhan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Bernali Sahoo',
            'photo': '',
            'thesis': 'Microarray Data Analysis Using Soft Data Mining Technique',
            'year': 2018,
            'don': '11/6/2018',
            'subject': 'Computer Science and Engineering',
            'university': 'Siksha \'O\' Anusandhan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Trilok Nath Pandey',
            'photo': '',
            'thesis': 'Financial Modeling Using Bio-inspired Algorithms',
            'year': 2019,
            'don': '19/7/2019',
            'subject': 'Computer Science and Engineering',
            'university': 'Siksha \'O\' Anusandhan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Sagar Samrat De',
            'photo': '',
            'thesis': 'Machine Learning for Social Network Analysis',
            'year': 2019,
            'don': '25/7/2019',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': 'S.N. Bose National Centre for Basic Sciences'
        }, {
            'category': 'phd',
            'name': 'Dr. Arabinda Panda',
            'photo': '',
            'thesis': 'An Efficient and Scalable Data Clustering Algorithm for Biological Data in Bio-informatics',
            'year': 2019,
            'don': '11/11/2019',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': 'Department of Information and Communication Technology, Fakir Mohan University, Balasore, Orissa'
        }, {
            'category': 'phd',
            'name': 'Dr. Prakash Kumar Sarangi',
            'photo': '',
            'thesis': 'Computing the Patterns of Stock Market Price Behavior',
            'year': 2020,
            'don': '30/6/2020',
            'subject': 'Computer Scienc',
            'university': 'Utkal University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Dr. Parimala Kumar Giri',
            'photo': '',
            'thesis': 'On Study of Biogeographic Based Optimization and its Application in Financial Engineering',
            'year': 2020,
            'don': '7/7/2020',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'awarded',
            'affiliation': 'Department of Computer Science, College of Engineering, Patia, Bhubaneswar - 751 024, Odisha, India'
        }, {
            'category': 'phd',
            'name': 'Dr. Monalisha Panda',
            'photo': '',
            'thesis': 'Multi-criteria Decision Making Using Machine Learning Techniques',
            'year': 2020,
            'don': '4/9/2020',
            'subject': 'Computer Science and Engineering',
            'university': 'Siksha \'O\' Anusandhan University',
            'status': 'awarded',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Mrs. Annapurna Mishra ',
            'photo': '',
            'thesis': 'Machine Learning Approaches for Biometric Applications',
            'year': 2020,
            'don': '7/7/20',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'submitted',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Mrs. Nalini Singh',
            'photo': '',
            'thesis': 'Electroencephalography (EEG) Signal Analysis Using Soft Data Mining Approaches',
            'year': 2020,
            'don': '7/7/2020',
            'subject': 'Information and Communication Technology',
            'university': 'Fakir Mohan University',
            'status': 'submitted',
            'affiliation': null
        }, {
            'category': 'phd',
            'name': 'Mrs.  Monalisa Jena',
            'photo': '',
            'thesis': 'On Hybridization of Decision Tree with Soft Computing Paradigms for Classification and Regressio',
            'year': 2020,
            'don': null,
            'subject': null,
            'university': 'Fakir Mohan University',
            'status': 'progress',
            'affiliation': null
        }
    ];
    $('[data-members-category]').each((i, el) => {
        var $el = $(el);
        $el.empty();
        var category = $el.attr('data-members-category');
        var catMembers = $.grep(members, (v) => {
            return v.category === category;
        });
        if (catMembers.length) {
            var catProgressMembers = $.grep(catMembers, (v) => {
                return !['awarded'].includes(v.status);
            });
            if (catProgressMembers.length) {
                var $mcont = $('<div class="member-container ' + category + '"></div>');
                $el.append(`<h1 class="h5 level-header">Current</h1>`);
                $el.append($mcont);
                $(catProgressMembers).each((i, member) => {
                    var $elm = $(`
                        <div class="member" data-index="` + (i + 1) + `">
                            <div class="avatar"><i class="fal fa-user"></i></div>
                            <div class="info">
                                <h1 class="h5 name">` + member.name + `</h1>` +
                        (member.area_research ? `<div class="research-area">Area of Research:<br />` + member.area_research + `</div>` : ``) +
                        (member.thesis ? `<div class="thesis"><label>Thesis:</label> ` + member.thesis + `</div>` : ``) +
                        (member.research_title ? `<div class="thesis"><label>Title of Research Work:</label> ` + member.research_title + `</div>` : ``) +
                        `</div>
                        </div>
                    `);
                    $mcont.append($elm);
                    setTimeout(() => {
                        $elm.addClass('show');
                    }, 0);
                });
            }

            var catAwardedMembers = $.grep(catMembers, (v) => {
                return ['awarded'].includes(v.status);
            });
            if (catAwardedMembers.length) {
                var $mcont = $('<div class="member-container ' + category + '"></div>');
                if (catProgressMembers.length) {
                    $el.append(`<h1 class="h5 level-header">Alumni</h1>`);
                }
                $el.append($mcont);
                $(catAwardedMembers).each((i, member) => {
                    var $elm = $(`
                        <div class="member" data-index="` + (i + 1) + `">
                            <div class="avatar"><i class="fal fa-user"></i></div>
                            <div class="info">
                                <h1 class="h5 name">` + member.name + `</h1>` +
                        (member.area_research ? `<div class="research-area">Area of Research:<br />` + member.area_research + `</div>` : ``) +
                        (member.thesis ? `<div class="thesis"><label>Thesis:</label> ` + member.thesis + `</div>` : ``) +
                        (member.research_title ? `<div class="thesis"><label>Title of Research Work:</label> ` + member.research_title + `</div>` : ``) +
                        (member.affiliation ? `<div class="affiliation"><label>Affiliation:</label> ` + member.affiliation + `</div>` : ``) +
                        `</div>
                        </div>
                    `);
                    $mcont.append($elm);
                    setTimeout(() => {
                        $elm.addClass('show');
                    }, 0);
                });
            }
        } else {
            $el.append('<div class="not-found">No members found</div>')
        }
    });

    // $('.member-container').each((i, elmc) => {
    //     $(elmc).find('.member').each((j, elm) => {
    //         $(elm).attr('data-index', j + 1);
    //     });
    // });
}

const renderPublicationChart = ($) => {
    var pubStat = [];
    $('.publications > .pub-type').each((i, elPubType) => {
        var pubType = $(elPubType).children('.header');
        pubType = (pubType && pubType.length) ? $(pubType[0]).text() : null;
        var count = $(elPubType).find('.timeline .t-event').length;
        var yearStat = [];
        $(elPubType).find('.t-head').each((j, tHead) => {
            var year = parseInt($(tHead).children('.t-tag').text());
            var events = $(tHead).next('.t-events').find('.t-event');
            var ypCount = events.length;
            yearStat.push({
                'year': year,
                'count': ypCount
            });

            $(tHead).children('.t-tag').append('<div class="count">Count: ' + ypCount + '</div>');
            events.each((l, event) => {
                $(event).attr('data-index', l + 1);
            });
        });
        pubStat.push({
            'type': pubType,
            'count': count,
            'yearwise': yearStat
        });
    });

    var chartColors = palette('tol-rainbow', pubStat.length).map((hex) => { return '#' + hex; });
    var chartPubStatView = new Chart($("#pubStatView"), {
        type: "doughnut",
        data: {
            labels: $.map(pubStat, (v) => { return v['type']; }),
            datasets: [{
                data: $.map(pubStat, (v) => { return v['count']; }),
                backgroundColor: chartColors,
                borderColor: new Array(pubStat.length).fill('#ffffff'),
                borderWidth: 1,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: false,
            aspectRatio: 1,
            cutout: 45,
            plugins: {
                title: {
                    display: true,
                    text: 'Publications',
                    font: { size: 16 },
                    color: '#37336e',
                    padding: { top: 0, left: 0, bottom: 10, right: 0 }
                },
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        boxHeight: 12
                    }
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                }
            }
        },
        plugins: [{
            afterDraw: (chart, args, options) => {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx,
                    legendHeight = chart.legend.height;
                ctx.restore();
                var fontSize = (height / 144).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                var text = $.map(pubStat, (v) => { return v['count']; }).reduce((a, b) => { return a + b }),
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = (legendHeight + chart.titleBlock.height) + (height - (legendHeight + chart.titleBlock.height)) / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });

    var years = $.map(pubStat, (v) => { return $.map(v['yearwise'], (u) => { return u['year'] }); });
    var yearMin = years.reduce((a, b) => { return a > b ? b : a });
    var yearMax = years.reduce((a, b) => { return a > b ? a : b });
    years = Array(yearMax - yearMin + 1).fill().map((_, i) => { return yearMin + i; });
    var pubYearStat = $.map(pubStat, (v, i) => {
        var data = Array(yearMax - yearMin + 1).fill(0);
        $.map(v['yearwise'], (v) => {
            data[v['year'] - yearMin] = v['count'];
        });
        return {
            label: v['type'],
            data: data,
            backgroundColor: chartColors[i]
        }
    });

    var chartPubStatYearView = new Chart($("#pubStatYearView"), {
        type: 'bar',
        data: {
            labels: years,
            datasets: pubYearStat
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Publications year by year',
                    position: 'bottom'
                },
                legend: {
                    display: false
                }
            },
            responsive: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
};

(function($, window, document) {
    $(function() {
        // $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', (e) => {
        //     switch ($(e.target).attr('href').substr(1)) {
        //         case 'publications':
        //             renderPublicationChart($);
        //             break;
        //         case 'members':
        //             renderMembers($);
        //             break
        //     }
        // });
        renderPublicationChart($);
        renderMembers($);

        let st = $(this).scrollTop();
        if (st > 0) {
            $('.p-header').addClass('scrolled');
        } else {
            $('.p-header').removeClass('scrolled');
        }
        $(window).on('scroll', () => {
            if (window.t) {
                clearTimeout(t);
            }
            window.t = setTimeout(() => {
                st = $(this).scrollTop();
                if (st > 40) {
                    $('.p-header').addClass('scrolled');
                } else if (st < 1) {
                    $('.p-header').removeClass('scrolled');
                }
            }, 10);
        });

        $("a[href='" + (location.hash || "#home") + "']").tab("show");
        $(document.body).on("click", "a[data-toggle='tab']", (event) => {
            event.preventDefault();
            location.hash = this.getAttribute("href");
        });

        $(window).on("popstate", () => {
            var anchor =
                location.hash ||
                $("a[data-toggle='tab']").first().attr("href") || "#home";
            $("a[href='" + anchor + "']").tab("show");
        });
    })
}(window.jQuery, window, document));