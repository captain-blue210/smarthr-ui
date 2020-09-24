var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
export var BlankImage = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'BlankImage' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (React.createElement(Wrapper, { className: className },
        React.createElement(Svg, { className: size, viewBox: "0 0 250 250", role: "img", "aria-label": title },
            React.createElement("title", null, title),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: "translate(20.283019, 12.735849)" },
                    React.createElement("path", { d: "M49.0098585,208.961108 L161.524953,208.961108 C164.244764,208.961108 166.636509,207.161816 167.390519,204.548608 L191.346415,121.516769 C192.472358,117.613703 189.543349,113.719835 185.480849,113.719835 L72.9655189,113.719835 C70.2459434,113.719835 67.8539623,115.519127 67.1001887,118.132335 L43.1442925,201.163939 C42.0181132,205.067241 44.9471226,208.961108 49.0098585,208.961108", fill: "#C0D5D2" }),
                    React.createElement("path", { d: "M72.965566,114.899033 C70.7839623,114.899033 68.8379717,116.362948 68.2332547,118.459175 L44.2771226,201.490778 C43.8441038,202.992193 44.134434,204.56908 45.0735849,205.817429 C46.0129717,207.065778 47.4476415,207.781816 49.0099057,207.781816 L161.525,207.781816 C163.706604,207.781816 165.652594,206.317901 166.257547,204.22191 L190.213443,121.190071 C190.646462,119.688892 190.356132,118.111769 189.416981,116.86342 C188.477594,115.615071 187.042925,114.899033 185.48066,114.899033 L72.965566,114.899033 Z M161.525,210.140307 L49.0099057,210.140307 C46.6995283,210.140307 44.578066,209.08158 43.1889151,207.235354 C41.8,205.389127 41.3707547,203.057052 42.0113208,200.837241 L65.967217,117.805401 C66.8613208,114.705637 69.7391509,112.540542 72.965566,112.540542 L185.48066,112.540542 C187.791038,112.540542 189.9125,113.599269 191.301651,115.445495 C192.690566,117.291958 193.119811,119.623797 192.479245,121.843608 L168.523349,204.875448 C167.629245,207.975448 164.751415,210.140307 161.525,210.140307 L161.525,210.140307 Z", fill: "#91AFAC" }),
                    React.createElement("polyline", { fill: "#FDFDFE", points: "182.844741 163.898066 191.764552 188.651132 184.227052 203.332264 206.743797 195.706085 200.107005 183.04783 195.457948 160.137925" }),
                    React.createElement("polygon", { fill: "#FDFDFE", points: "197.600731 91.5764623 167.468656 98.7611321 159.877146 46.8896698 177.30592 38.1337736 188.161344 56.7436792" }),
                    React.createElement("polygon", { fill: "#C0D5D2", points: "204.855873 193.732736 206.073797 199.153962 183.836769 209.674245 175.988892 204.981792 182.69809 200.73934 186.554222 202.210802" }),
                    React.createElement("path", { d: "M181.661344,210.140425 C178.282807,210.140425 175.375731,206.802453 174.875731,205.370613 C174.808986,205.179811 174.792712,204.975566 174.827618,204.776981 C175.01559,203.711415 176.145542,203.102689 178.197193,201.9975 C179.912524,201.073208 182.255212,199.811415 184.486108,198.005519 C187.356392,194.75434 190.273608,190.414481 190.490118,187.8475 L189.996958,186.018019 C186.347665,172.472264 182.211816,157.118726 178.562288,151.199623 C178.521486,151.133113 178.487052,151.062594 178.460165,150.989481 C177.433278,148.212123 176.082807,139.805755 174.997665,133.051038 C174.492241,129.90434 174.055448,127.186651 173.831392,126.227925 C173.683278,125.593491 174.077146,124.959528 174.711344,124.811179 C175.347429,124.663302 175.979741,125.05717 176.12809,125.691132 C176.370778,126.730755 176.792476,129.354811 177.326203,132.676745 C178.325495,138.896321 179.688939,147.383585 180.634693,150.067547 C184.446958,156.348208 188.604033,171.780047 192.274316,185.404811 L192.817241,187.419434 C192.848373,187.534292 192.86158,187.653396 192.857099,187.772264 C192.689175,192.102453 187.27125,198.419434 186.187052,199.642075 C186.145071,199.689245 186.09908,199.733349 186.050259,199.773208 C183.623137,201.753396 181.133514,203.09467 179.31559,204.073915 C178.659693,204.427217 177.888703,204.842547 177.426439,205.145377 C178.145778,206.133113 179.882335,207.781934 181.660637,207.781934 L181.679976,207.781934 C183.01441,207.772972 188.056156,206.285472 194.18375,203.812123 C201.133278,201.006934 204.344835,199.019198 204.934929,198.27533 C204.559693,194.106226 202.919363,191.394906 201.46842,188.996792 C200.820542,187.926274 200.208986,186.914953 199.777146,185.876038 C198.918656,183.809764 198.254741,177.861651 197.340354,169.023208 C196.838939,164.176274 196.365118,159.596792 195.918184,157.361651 C194.842948,153.571085 193.250967,147.068255 193.084929,145.561415 C192.724552,142.27533 193.276203,135.504104 193.658986,132.021085 C193.692476,131.717075 196.94342,101.518019 191.543656,89.8003302 C191.27125,89.2088208 191.529741,88.5081132 192.12125,88.2357075 C192.712524,87.963066 193.412995,88.2215566 193.685637,88.813066 C199.356627,101.119906 196.142712,131.012594 196.003325,132.279104 C195.656863,135.433349 195.09059,142.215189 195.429269,145.303868 C195.567476,146.556934 197.095071,152.875094 198.199552,156.761179 C198.207807,156.790425 198.215118,156.819906 198.221014,156.849623 C198.692948,159.180047 199.175495,163.843491 199.686344,168.780519 C200.345071,175.146557 201.164882,183.069198 201.954976,184.971085 C202.318656,185.846085 202.859693,186.740425 203.486344,187.776274 C205.024316,190.318255 206.938231,193.481934 207.308514,198.363302 C207.313467,198.426038 207.313231,198.488774 207.307807,198.551274 C207.244599,199.305047 207.096014,201.070142 195.674552,205.751745 C190.381627,207.921557 183.880212,210.125566 181.695778,210.140425 L181.661344,210.140425 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M185.113868,202.91934 C183.234858,202.91934 182.132736,201.9875 182.071651,201.934198 L183.617877,200.153302 L183.599009,200.1375 C183.641934,200.171698 184.67967,200.968632 186.552311,200.283726 L187.099245,200.084198 C201.150896,194.967453 203.556557,193.419811 203.938632,192.991509 C204.344764,192.482547 205.083915,192.401415 205.593585,192.807783 C206.102783,193.213915 206.183915,193.958726 205.777783,194.467925 C205.041934,195.391038 202.343113,197.043632 187.906321,202.300472 L187.362453,202.498585 C186.525189,202.804953 185.771887,202.91934 185.113868,202.91934", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M177.86566,100.827783 C176.631698,112.577311 174.933585,148.599717 175.38217,152.866698 C176.818491,162.434623 175.904104,189.470708 176.424151,203.179434 C176.777689,206.543113 166.839481,212.107028 163.025566,214.542406 C162.335472,214.983679 156.597028,217.869528 158.094198,220.448302 C159.934292,223.403962 186.930991,217.940991 188.141368,215.910802 C190.509764,213.207264 186.204575,202.584858 186.168491,200.721887 C186.132406,198.858915 189.15717,183.30467 189.699151,175.645 C189.698208,167.337689 188.290425,157.682736 188.485943,156.292642 C188.940896,153.068349 198.870849,125.528255 201.668019,116.429906", fill: "#FDFDFE" }),
                    React.createElement("path", { d: "M161.952241,222.485967 C159.167099,222.485967 157.707665,222.058608 157.093278,221.07158 C157.086675,221.061203 157.080307,221.050825 157.07441,221.040448 C156.664976,220.335495 156.562146,219.541627 156.776297,218.744458 C157.333373,216.671108 159.900825,214.976769 162.075354,213.732429 C162.219222,213.650118 162.328656,213.588561 162.390684,213.548939 C162.912146,213.21592 163.527005,212.83691 164.239033,212.398467 C166.411439,211.060495 169.38691,209.228184 171.706958,207.420165 C175.205778,204.69375 175.273467,203.51191 175.251297,203.302476 C175.248467,203.276533 175.24658,203.250354 175.245637,203.223939 C175.047995,198.013325 175.056486,190.991392 175.065684,183.557665 C175.080307,171.435495 175.095637,158.901061 174.21592,153.041627 C174.213325,153.02441 174.211203,153.007193 174.209316,152.989741 C173.745401,148.575118 175.462854,112.414976 176.692807,100.704599 C176.760967,100.057193 177.343514,99.5892689 177.988797,99.6550708 C178.636439,99.7229953 179.106486,100.30342 179.038325,100.951061 C177.855778,112.211439 176.119458,148.398467 176.552241,152.718986 C177.454127,158.764741 177.438797,171.369929 177.424175,183.560259 C177.415212,190.954363 177.406722,197.939269 177.601297,203.100825 C177.899175,206.461203 172.036439,210.366392 165.476061,214.406722 C164.772524,214.839741 164.165212,215.213797 163.660259,215.536439 C163.579363,215.58809 163.436203,215.670873 163.24658,215.779599 C160.090448,217.585731 159.224646,218.72158 159.053892,219.356486 C159.010967,219.516863 159.015684,219.643986 159.072995,219.775825 C159.879835,220.285731 164.227476,220.45625 173.208373,218.877476 C181.026297,217.502948 186.38691,215.852712 187.192571,215.210731 C187.212146,215.18408 187.232665,215.158608 187.254363,215.133844 C188.523939,213.684552 186.652005,207.169222 185.852476,204.38691 C185.294222,202.44375 185.002241,201.39941 184.989505,200.744693 C184.973467,199.913561 185.36592,197.46191 186.119458,192.837618 C186.997524,187.450118 188.198939,180.077005 188.519929,175.603184 C188.516392,170.627476 188.010731,165.230542 187.641392,161.287146 C187.350825,158.183608 187.226061,156.783844 187.318278,156.12842 C187.580307,154.270165 190.357901,146.107193 194.565212,133.865684 C197.043514,126.655071 199.384552,119.844222 200.540684,116.083373 C200.732193,115.460967 201.392099,115.111675 202.014505,115.302712 C202.63691,115.494222 202.986675,116.154127 202.795165,116.776533 C201.627476,120.574175 199.280542,127.402948 196.795873,134.632429 C193.565212,144.03125 189.903892,154.684316 189.653656,156.457193 C189.597759,156.88408 189.797052,159.010731 189.989741,161.067099 C190.364505,165.067807 190.877948,170.547052 190.87842,175.644693 C190.87842,175.672524 190.877476,175.700354 190.875354,175.727948 C190.551533,180.304599 189.384788,187.464269 188.447288,193.217099 C187.875118,196.727476 187.334788,200.043042 187.347524,200.698939 C187.354835,201.075354 187.760967,202.488561 188.118986,203.735495 C189.755778,209.431486 190.958137,214.335731 189.096108,216.608137 C188.767099,217.09941 187.490684,218.33125 178.092335,220.331486 C173.331722,221.344693 166.663797,222.442335 162.226297,222.485967 C162.133844,222.485967 162.042099,222.485967 161.952241,222.485967 L161.952241,222.485967 Z", fill: "#91AFAC" }),
                    React.createElement("polygon", { fill: "#C0D5D2", points: "188.141439 210.358939 188.141439 215.910825 161.82658 221.031344 157.846156 219.341958 165.127052 213.236533 169.092854 214.379693" }),
                    React.createElement("path", { d: "M161.952241,222.485967 C159.167099,222.485967 157.707665,222.058608 157.093278,221.07158 C157.086675,221.061203 157.080307,221.050825 157.07441,221.040448 C156.664976,220.335495 156.562146,219.541627 156.776297,218.744458 C157.333373,216.671108 159.900825,214.976769 162.075354,213.732429 C162.219222,213.650118 162.328656,213.588561 162.390684,213.548939 C162.912146,213.21592 163.527005,212.83691 164.239033,212.398467 C166.411439,211.060495 169.38691,209.228184 171.706958,207.420165 C175.205778,204.69375 175.273467,203.51191 175.251297,203.302476 C175.248467,203.276533 175.24658,203.250354 175.245637,203.223939 C175.047995,198.013325 175.056486,190.991392 175.065684,183.557665 C175.080307,171.435495 175.095637,158.901061 174.21592,153.041627 C174.213325,153.02441 174.211203,153.007193 174.209316,152.989741 C173.745401,148.575118 175.462854,112.414976 176.692807,100.704599 C176.760967,100.057193 177.343514,99.5892689 177.988797,99.6550708 C178.636439,99.7229953 179.106486,100.30342 179.038325,100.951061 C177.855778,112.211439 176.119458,148.398467 176.552241,152.718986 C177.454127,158.764741 177.438797,171.369929 177.424175,183.560259 C177.415212,190.954363 177.406722,197.939269 177.601297,203.100825 C177.899175,206.461203 172.036439,210.366392 165.476061,214.406722 C164.772524,214.839741 164.165212,215.213797 163.660259,215.536439 C163.579363,215.58809 163.436203,215.670873 163.24658,215.779599 C160.090448,217.585731 159.224646,218.72158 159.053892,219.356486 C159.010967,219.516863 159.015684,219.643986 159.072995,219.775825 C159.879835,220.285731 164.227476,220.45625 173.208373,218.877476 C181.026297,217.502948 186.38691,215.852712 187.192571,215.210731 C187.212146,215.18408 187.232665,215.158608 187.254363,215.133844 C188.523939,213.684552 186.652005,207.169222 185.852476,204.38691 C185.294222,202.44375 185.002241,201.39941 184.989505,200.744693 C184.973467,199.913561 185.36592,197.46191 186.119458,192.837618 C186.997524,187.450118 188.198939,180.077005 188.519929,175.603184 C188.516392,170.627476 188.010731,165.230542 187.641392,161.287146 C187.350825,158.183608 187.226061,156.783844 187.318278,156.12842 C187.580307,154.270165 190.357901,146.107193 194.565212,133.865684 C197.043514,126.655071 199.384552,119.844222 200.540684,116.083373 C200.732193,115.460967 201.392099,115.111675 202.014505,115.302712 C202.63691,115.494222 202.986675,116.154127 202.795165,116.776533 C201.627476,120.574175 199.280542,127.402948 196.795873,134.632429 C193.565212,144.03125 189.903892,154.684316 189.653656,156.457193 C189.597759,156.88408 189.797052,159.010731 189.989741,161.067099 C190.364505,165.067807 190.877948,170.547052 190.87842,175.644693 C190.87842,175.672524 190.877476,175.700354 190.875354,175.727948 C190.551533,180.304599 189.384788,187.464269 188.447288,193.217099 C187.875118,196.727476 187.334788,200.043042 187.347524,200.698939 C187.354835,201.075354 187.760967,202.488561 188.118986,203.735495 C189.755778,209.431486 190.958137,214.335731 189.096108,216.608137 C188.767099,217.09941 187.490684,218.33125 178.092335,220.331486 C173.331722,221.344693 166.663797,222.442335 162.226297,222.485967 C162.133844,222.485967 162.042099,222.485967 161.952241,222.485967 L161.952241,222.485967 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M168.173042,215.632594 C165.52658,215.632594 164.254646,214.03566 164.195212,213.959245 L166.058892,212.513726 L166.043561,212.494623 C166.07941,212.536604 166.94191,213.521981 168.911722,213.214434 L169.487901,213.125283 C184.26691,210.847453 186.928231,209.798396 187.386486,209.453113 C187.884127,209.033302 188.624693,209.097925 189.045212,209.59533 C189.465495,210.093208 189.399929,210.83967 188.902524,211.259717 C188.000401,212.021509 185.031297,213.115849 169.847335,215.456415 L169.274222,215.544858 C168.884127,215.605708 168.516675,215.632594 168.173042,215.632594", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M196.032948,89.0509906 C198.661014,94.3083019 213.35441,149.435896 213.047571,149.744387 C214.738844,158.261604 207.790024,169.246981 192.778703,171.159481 C172.439788,173.750519 158.250401,166.605472 158.250401,158.463019 C158.250401,158.463019 165.131769,91.8443868 167.176816,87.7557075", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M184.554198,172.871156 C174.581792,172.871156 165.956557,170.461722 160.999481,166.09592 C158.429434,163.832948 157.071179,161.193325 157.071179,158.462901 L157.077311,158.34191 C157.783915,151.501344 164.040991,91.3890802 166.122358,87.2282311 L168.231557,88.283184 C166.802783,91.1395519 162.187925,131.827288 159.429906,158.520684 C159.450425,160.534363 160.531085,162.540731 162.558208,164.326344 C167.111274,168.336014 177.402547,171.92941 192.62967,169.989552 C199.784151,169.078231 205.635802,165.921156 209.107028,161.100165 C211.594292,157.645448 212.608915,153.590259 211.890755,149.973986 L211.768585,149.357712 L211.790991,149.334835 C210.577547,143.604646 197.412689,94.4485142 194.978019,89.5782311 L197.087925,88.52375 C198.656085,91.6614858 203.832264,110.181533 206.778019,120.942146 C208.655613,127.799458 210.569764,134.955118 212.029434,140.57375 C212.721651,143.237901 213.284623,145.454646 213.657972,146.983892 C213.996415,148.371156 214.182972,149.135071 214.223774,149.615259 C215.030849,153.844033 213.866462,158.526108 211.021179,162.478231 C207.163396,167.835542 200.737925,171.334127 192.927783,172.329175 C190.068821,172.693325 187.261509,172.871156 184.554198,172.871156", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M168.794906,35.32875 C168.509057,35.32875 168.2225,35.225684 167.995849,35.0167217 L166.728396,33.8485613 C166.593255,33.7242689 166.489009,33.5704953 166.423915,33.3987972 L165.967311,32.1964387 C165.772972,31.6853538 165.955755,31.1077594 166.408349,30.8011557 C166.860708,30.4947877 167.465189,30.5393632 167.867547,30.9096462 L168.29066,31.2985613 C168.607877,31.5900708 168.729104,32.0153066 168.647028,32.408467 L169.594434,33.2822877 C170.073208,33.7237972 170.103632,34.4697877 169.662358,34.9487972 C169.429811,35.2009198 169.11283,35.32875 168.794906,35.32875", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M176.128113,38.2423349 C174.76184,36.984316 173.699575,33.9607311 172.013255,33.201533 C171.025047,32.7583726 168.899575,34.1522406 168.165142,34.6626179 C165.215849,36.7149764 161.568915,37.8854953 158.613962,39.9411557 C157.954292,40.4008255 155.252877,41.2649764 155.371981,42.2725236 C155.542264,43.710967 159.284245,45.3286557 159.87717,46.8897406 C159.87717,46.8897406 155.614198,62.6772406 156.520802,69.8821934 C157.427406,77.0869104 163.271745,89.8862028 164.418443,93.0970519 C164.706415,93.9038915 166.770566,98.2621462 167.468679,98.7612028 C169.606415,100.286439 171.638962,99.5225236 174.244151,99.214033 C180.902642,98.4251179 191.401698,94.8472877 196.001934,89.8508255", fill: "#FDFDFE" }),
                    React.createElement("path", { d: "M170.422594,100.856557 C169.227783,100.856557 168.01316,100.598302 166.783679,99.7211792 C165.572594,98.8556132 163.32566,93.5438208 163.307736,93.4935849 C163.059858,92.799717 162.573302,91.6136321 161.956792,90.1115094 C159.756557,84.7494811 156.073774,75.774717 155.350896,70.029434 C154.504198,63.299717 157.899245,49.7874528 158.614575,47.0508962 C158.26434,46.6155189 157.481557,46.0244811 156.881085,45.5711792 C155.578726,44.5876887 154.348774,43.6586792 154.200896,42.4110377 C154.014575,40.8336792 155.863632,39.9681132 157.213396,39.3360377 C157.478255,39.212217 157.840755,39.0424057 157.939811,38.9735377 C159.492642,37.8933491 161.211981,37.0532547 162.874953,36.2405189 C164.529434,35.4325 166.091698,34.6688208 167.491462,33.6945283 C170.826132,31.3768396 172.082972,31.9405189 172.495708,32.1254245 C173.82,32.7216509 174.695236,34.1162264 175.541698,35.4650472 C176.005613,36.2039623 176.485094,36.9678774 176.92684,37.374717 C177.405849,37.8159906 177.436745,38.5619811 176.995708,39.0409906 C176.554198,39.52 175.808443,39.5506604 175.329434,39.1098585 C174.655142,38.4891038 174.090519,37.5891038 173.544057,36.7188208 C172.926132,35.7341509 172.227311,34.6204717 171.565755,34.2938208 C171.272594,34.2782547 170.302075,34.6136321 168.83816,35.6308491 C167.290047,36.7084434 165.572123,37.5478302 163.910566,38.3598585 C162.25467,39.1685849 160.690755,39.9329717 159.287453,40.9091509 C159.024953,41.0921698 158.666698,41.2598585 158.213396,41.4721226 C157.837217,41.6483019 157.045708,42.0185849 156.663632,42.3023113 C156.984151,42.6938208 157.78816,43.3006604 158.302311,43.6888679 C159.470708,44.5711792 160.574481,45.4046698 160.979434,46.4709434 C161.067642,46.7032547 161.080377,46.9575 161.015519,47.1968868 C160.973774,47.352783 156.823774,62.8438208 157.690991,69.7350943 C158.374717,75.1695283 161.982972,83.9624528 164.138868,89.2164623 C164.766934,90.7464151 165.262689,91.9551415 165.528962,92.7004245 C165.853491,93.6091509 167.640755,97.2393396 168.191698,97.8280189 C169.512217,98.7504245 170.752783,98.5532547 172.620943,98.2572642 C173.094057,98.1822642 173.583443,98.1046698 174.105377,98.0428774 C180.988632,97.2273113 190.985802,93.5582075 195.134151,89.0520755 C195.57566,88.5728302 196.321651,88.541934 196.80066,88.9832075 C197.27967,89.4244811 197.310566,90.1704717 196.869528,90.649717 C194.059858,93.7011321 189.58934,95.8987736 186.333915,97.2046698 C182.367406,98.7959434 178.011745,99.9551415 174.382736,100.384858 C173.907028,100.441226 173.441226,100.515283 172.990519,100.586509 C172.146179,100.720708 171.289575,100.856557 170.422594,100.856557", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M196.000472,91.0303774 C195.416745,91.0303774 194.909906,90.5973585 194.832547,90.0032547 C191.152358,61.724717 180.318396,43.8195283 180.209906,43.6468868 C179.249292,42.1164623 177.449528,40.4310849 175.513679,39.2487736 C174.957547,38.9093868 174.782311,38.1836792 175.121698,37.627783 C175.460849,37.0716509 176.186557,36.8968868 176.742689,37.2358019 C179.004481,38.6171698 181.047642,40.545 182.207783,42.3933491 C182.319104,42.5711792 193.365802,60.4560849 197.171226,89.6987736 C197.255189,90.3445283 196.8,90.9362736 196.154009,91.0202358 C196.102594,91.0268396 196.051179,91.0303774 196.000472,91.0303774", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M166.382075,28.8811557 L168.16533,34.6627594 L158.507311,39.6955425 C157.158726,37.5693632 156.322642,37.2420047 155.343632,36.3398821 C154.070991,37.7219575 149.697406,40.236816 148.679481,40.1903538 C147.661321,40.1438915 142.095047,34.1856368 140.391038,29.8257311 C138.686792,25.4660613 138.598821,20.0127594 139.111085,17.3677123 L145.903066,11.3648821", fill: "#FDFDFE" }),
                    React.createElement("path", { d: "M148.683986,41.3697406 C148.663939,41.3697406 148.644835,41.3692689 148.625731,41.3685613 C147.690825,41.3256368 146.098608,39.9867217 143.89342,37.3888443 C142.883278,36.19875 140.412759,33.1213915 139.292476,30.2551179 C137.608278,25.9454481 137.345542,20.283184 137.953325,17.1435613 C138.002854,16.8881368 138.135165,16.6560613 138.329976,16.4841274 L145.121958,10.481533 C145.610165,10.0499292 146.355212,10.0959198 146.78658,10.5838915 C147.217948,11.0720991 147.171958,11.8173821 146.683986,12.2485142 L140.202618,17.976816 C139.812759,20.528467 139.953325,25.4669104 141.48941,29.3963915 C142.974552,33.1961557 147.583042,38.2072406 148.824788,38.983184 C149.882099,38.7029953 153.413703,36.6947406 154.476203,35.5412028 C154.688231,35.3110142 154.982807,35.1744575 155.295307,35.1614858 C155.607099,35.1485142 155.912995,35.2605425 156.142948,35.4728066 C156.357571,35.670684 156.571486,35.8428538 156.798137,36.0249292 C157.400259,36.5093632 158.067005,37.0459198 158.891297,38.1657311 L166.748844,34.0709198 L165.254976,29.2287028 C165.063231,28.6062972 165.412288,27.9461557 166.034458,27.7541745 C166.656863,27.5626651 167.317005,27.9107783 167.508986,28.5336557 L169.292241,34.3150236 C169.459929,34.8591274 169.215118,35.4452123 168.710165,35.7084198 L159.052382,40.740967 C158.509222,41.0246934 157.839646,40.8442689 157.51158,40.3272877 C156.623844,38.9277594 156.035401,38.4388443 155.366061,37.8999292 C153.524788,39.3680896 150.040354,41.3697406 148.683986,41.3697406 L148.683986,41.3697406 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M169.677052,13.6050708 C171.107948,12.8204009 171.782948,12.7463443 173.293561,13.010967 C177.750165,13.7904481 182.384127,18.339033 183.607476,23.0024764 C183.836486,23.8739387 184.120448,34.5715802 188.16125,36.8520047 C187.065024,36.89375 184.663844,37.1262972 183.466203,36.9560142 C178.200401,36.2029481 170.482476,23.1147406 170.351108,19.3152123", fill: "#C0D5D2" }),
                    React.createElement("path", { d: "M184.617759,38.1969575 C184.12908,38.1969575 183.675071,38.1769104 183.300071,38.1233726 C179.691816,37.6075708 175.92908,32.7747877 174.007146,29.9398821 C171.739458,26.5948349 169.259033,21.855684 169.172712,19.3559198 C169.150071,18.7049764 169.659505,18.1592217 170.310448,18.1365802 C170.958797,18.1153538 171.507146,18.6233726 171.529788,19.2745519 C171.580024,20.729033 173.250778,24.6207783 175.959269,28.6162972 C178.772476,32.7658255 181.713042,35.5139387 183.63309,35.7887028 C184.080259,35.8521462 184.776014,35.8476651 185.499363,35.8186557 C183.649835,32.9667689 182.956439,28.3049764 182.566344,24.2467217 C182.528608,23.8542689 182.48592,23.4108726 182.462807,23.2861085 C181.340165,19.0365802 177.051958,14.8653538 173.090401,14.1726651 C171.864693,13.9580425 171.454788,13.9752594 170.244175,14.6389387 C169.672948,14.9530896 168.956203,14.743184 168.643231,14.1721934 C168.329788,13.600967 168.538986,12.8842217 169.109976,12.57125 C170.726958,11.6844575 171.670118,11.5292689 173.497005,11.8495519 C178.353373,12.6988443 183.401014,17.5677123 184.748184,22.7033255 C184.807382,22.9280896 184.839693,23.2497877 184.913986,24.0210142 C185.156439,26.543184 185.89441,34.2188915 188.740637,35.8250236 C189.200307,36.0844575 189.431675,36.6174764 189.307382,37.1302123 C189.182854,37.6427123 188.73309,38.0104009 188.206203,38.0304481 C187.940165,38.0405896 187.595118,38.0625236 187.209033,38.0865802 C186.39559,38.1377594 185.455967,38.1969575 184.617759,38.1969575", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M156.223514,28.2479953 C157.582948,26.771816 154.662901,21.3456368 153.324929,20.4942217 C151.631297,19.4163915 149.070212,21.3324292 149.299458,23.4979953 C142.092146,21.1635613 136.330118,16.6147406 137.312429,14.9529481 C148.961014,-4.75129717 161.372099,0.890448113 166.820212,6.60884434 C168.345212,8.21002358 169.238137,11.6472877 169.677052,13.6050708 C170.057005,15.2965802 173.522571,27.6373821 160.181769,32.7036557 L156.223514,28.2479953 Z", fill: "#C0D5D2" }),
                    React.createElement("path", { d: "M157.632571,28.0585849 L160.512524,31.300566 C165.715354,29.0960849 171.005448,24.339717 168.581627,14.100566 C168.559693,14.0074057 168.541061,13.9281604 168.526675,13.8635377 C167.616533,9.80599057 166.631863,8.12108491 165.966297,7.4220283 C164.331863,5.70693396 159.881863,1.79113208 153.873373,2.47745283 C148.338467,3.10882075 143.131392,7.46966981 138.395542,15.4385377 C138.667476,16.5118868 142.446486,19.7394811 148.333514,21.9156604 C148.657571,20.9951415 149.312759,20.1696698 150.208514,19.6149528 C151.455684,18.8416038 152.857335,18.7989151 153.958042,19.4993868 C155.408042,20.4220283 157.406156,24.1170755 157.708986,26.4359434 C157.789646,27.0526887 157.763939,27.5949057 157.632571,28.0585849 L157.632571,28.0585849 Z M160.182099,33.8828774 C159.851439,33.8828774 159.528325,33.7437264 159.300259,33.4866509 L155.341769,29.0309906 C154.942476,28.5814623 154.945778,27.9036321 155.347901,27.4581132 C155.462995,27.2467925 155.440825,26.2109434 154.629741,24.4413679 C153.85309,22.7472642 152.970542,21.6666038 152.691769,21.4890094 C152.220071,21.1890094 151.622665,21.5133019 151.450495,21.6196698 C150.906863,21.9564623 150.39342,22.6298113 150.472193,23.3739151 C150.514175,23.7710849 150.352382,24.1623585 150.042241,24.4137736 C149.732335,24.6656604 149.316297,24.7430189 148.935873,24.6199057 C142.915118,22.6696698 137.20309,18.9328774 136.202618,16.2899528 C135.863703,15.3946698 136.067241,14.7423113 136.297193,14.3529245 C141.447665,5.64089623 147.271014,0.856933962 153.60592,0.134056604 C160.66559,-0.672075472 165.79625,3.82438679 167.673844,5.79537736 C168.959458,7.14490566 169.990825,9.61495283 170.827618,13.3470283 C170.84059,13.4041038 170.857099,13.4743868 170.876675,13.5571698 C171.165825,14.7779245 172.045307,18.4930189 171.137288,22.5720283 C169.987052,27.7404245 166.343656,31.6248585 160.600495,33.8059906 C160.464175,33.8576415 160.322429,33.8828774 160.182099,33.8828774 L160.182099,33.8828774 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M166.877948,199.616745 L136.207665,110.775943 C135.278656,108.099764 132.935259,106.330425 130.319693,106.330425 L81.8576651,106.330425 L72.4465802,92.0518868 C71.3170991,90.3379717 69.4020047,89.3066038 67.3496462,89.3066038 L21.9194575,89.3066038 C18.6444575,89.3066038 15.9529481,91.8908019 15.8199292,95.1629717 L15.3652123,106.330425 L7.53879717,106.330425 C3.12912736,106.330425 0.0845518868,111.1625 1.65106132,115.674764 L32.3211085,204.515566 C33.2501179,207.191745 35.5935142,208.961085 38.2088443,208.961085 L160.989976,208.961085 C165.39941,208.961085 168.444458,204.129009 166.877948,199.616745", fill: "#F0FAF8" }),
                    React.createElement("path", { d: "M7.53886792,107.509623 C5.9690566,107.509623 4.50891509,108.296179 3.5334434,109.667642 C2.38886792,111.276604 2.10160377,113.377547 2.76504717,115.287925 L33.4358019,204.130613 C34.1935849,206.313868 36.1119811,207.781792 38.2089151,207.781792 L160.990047,207.781792 C162.559858,207.781792 164.019764,206.995236 164.995472,205.623538 C166.140047,204.015047 166.427311,201.913868 165.763868,200.003491 C165.763632,200.002783 165.763396,200.002311 165.76316,200.001604 L135.092877,111.160802 C134.335094,108.977783 132.416462,107.509623 130.319764,107.509623 L81.8575,107.509623 C81.4612736,107.509623 81.0909906,107.31033 80.873066,106.979434 L71.4619811,92.7008962 C70.5478302,91.3138679 69.0108019,90.4858019 67.349717,90.4858019 L21.9195283,90.4858019 C19.2674057,90.4858019 17.1058491,92.5612736 16.998066,95.2110377 L16.5435849,106.378255 C16.5176415,107.010566 15.9978302,107.509623 15.365283,107.509623 L7.53886792,107.509623 Z M160.990047,210.140283 L38.2089151,210.140283 C35.1086792,210.140283 32.2947642,208.03533 31.2070283,204.902075 L0.536273585,116.059623 C-0.376226415,113.431085 0.0256603774,110.530142 1.61150943,108.30066 C3.03533019,106.299009 5.19570755,105.151132 7.53886792,105.151132 L14.2329717,105.151132 L14.6414623,95.1150472 C14.8008962,91.1966509 17.9978302,88.1273113 21.9195283,88.1273113 L67.349717,88.1273113 C69.8060849,88.1273113 72.079434,89.3518396 73.4313208,91.402783 L82.4926415,105.151132 L130.319764,105.151132 C133.42,105.151132 136.233915,107.256321 137.321651,110.38934 L167.992642,199.231792 C168.90467,201.861745 168.502783,204.761981 166.917406,206.990755 C165.493585,208.992406 163.332972,210.140283 160.990047,210.140283 L160.990047,210.140283 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M157.253962,67.5580896 L165.994764,74.9823821 L162.849717,79.8672877 L138.400189,106.865873 C138.400189,106.865873 136.690755,110.668231 136.816698,110.24842 C136.867877,110.077429 127.649245,116.173656 125.753019,114.565401 C124.587925,113.577193 122.184151,111.425071 122.184151,109.591816 C122.184151,108.787335 127.155613,105.309976 127.155613,105.309976 C127.155613,105.309976 123.880142,101.547241 124.125425,101.154788 C125.23816,99.373184 133.548774,99.2222406 133.548774,99.2222406 L153.990519,76.1837972 L157.253962,67.5580896 Z", fill: "#FDFDFE" }),
                    React.createElement("path", { d: "M165.993514,76.1619811 C165.79658,76.1619811 165.596816,76.1124528 165.413325,76.0084434 C165.22158,75.899717 164.881722,75.6850943 164.367807,75.3600943 C162.652241,74.2751887 158.094693,71.3935849 156.293278,71.0393396 C155.654363,70.9136321 155.23809,70.2938208 155.363797,69.6546698 C155.489505,69.0155189 156.10908,68.6001887 156.748467,68.7251887 C158.711675,69.1110377 162.176533,71.1841509 165.628184,73.3664623 C166.060495,73.6400472 166.433608,73.8758962 166.576061,73.9565566 C167.142571,74.277783 167.341863,74.9973585 167.020401,75.5638679 C166.803656,75.9468868 166.404363,76.1619811 165.993514,76.1619811", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M152.056297,89.9681132 C152.047099,89.9858019 152.040259,90.0020755 152.034363,90.0155189 C152.041439,89.9994811 152.048514,89.9836792 152.056297,89.9681132 L152.056297,89.9681132 Z M125.744976,115.744528 C123.75441,115.744528 121.094033,112.487453 120.730118,110.650425 C120.49309,109.454906 121.100637,108.753491 121.748042,108.496179 C123.674458,107.729906 126.337665,104.803962 127.201344,103.741226 C127.611722,103.235802 128.355118,103.159151 128.860071,103.57 C129.365495,103.980613 129.442382,104.723538 129.031533,105.228726 C128.694741,105.643349 125.817618,109.123066 123.112429,110.466698 C123.480118,111.448538 125.075637,113.271887 125.754646,113.385802 C131.349222,113.309151 135.384599,109.930377 135.422807,109.895943 C136.349458,109.069057 137.219033,106.570943 137.549458,105.190519 C137.587901,105.02967 137.659835,104.878962 137.760542,104.747594 C138.397571,103.916462 140.756061,101.536038 144.564788,97.7141038 C147.528703,94.7400472 151.579175,90.6758962 152.065259,89.949717 C152.088137,89.9049057 152.113608,89.8617453 152.14191,89.8202358 C153.171392,88.3124528 155.479882,85.9155189 157.923986,83.377783 C160.38059,80.8268396 162.92092,78.1891038 163.856061,76.7447642 C166.274222,73.0096226 168.325637,68.8636321 170.310071,64.8541981 C171.661958,62.1218868 173.060071,59.2964151 174.53059,56.7039623 C174.851816,56.1376887 175.571392,55.9386321 176.137901,56.2600943 C176.704646,56.5813208 176.903467,57.3008962 176.581769,57.8676415 C175.144269,60.4023113 173.822807,63.0728302 172.423514,65.8999528 C170.410071,69.9692925 168.327759,74.1773113 165.836014,78.0261321 C164.777524,79.6615094 162.273514,82.2612736 159.622807,85.0136321 C157.374222,87.3487736 155.049458,89.762217 154.115024,91.1136321 C153.683184,91.8395755 152.038373,93.5560849 146.235307,99.3789623 C143.469505,102.154434 140.615259,105.018349 139.776108,106.005849 C139.511958,107.015519 138.568561,110.250189 136.992618,111.656085 C135.744269,112.769764 131.294505,115.674953 125.767618,115.744528 L125.744976,115.744528 Z", fill: "#91AFAC" }),
                    React.createElement("path", { d: "M126.565731,105.812618 C125.474458,105.812618 124.449222,105.402005 123.627052,104.624175 C122.707005,103.753892 122.172571,102.526061 122.265731,101.496816 C122.398986,100.019693 124.11408,99.1991745 128.38342,98.5694575 C130.432005,98.2673349 132.437429,98.1145047 133.181061,98.064033 C136.59191,95.8482311 144.938373,85.6399764 149.468797,80.0989387 C150.694505,78.5998821 151.662429,77.4161557 152.276344,76.7005896 C152.884363,75.9916274 154.572807,71.9996462 156.974222,64.6795991 C158.994269,58.5208726 160.397335,53.4067217 160.440495,52.4942217 C160.471156,51.84375 161.031769,51.3399764 161.673514,51.3715802 C162.324222,51.4020047 162.826816,51.9543632 162.796156,52.6045991 C162.667146,55.3487028 156.252052,75.6878538 154.066439,78.235967 C153.470684,78.9305425 152.510542,80.1048349 151.294976,81.5918632 C144.749458,89.5972877 137.486014,98.3005896 134.140731,100.242099 C133.980825,100.334788 133.80158,100.388797 133.617146,100.39941 C129.553231,100.635731 125.609599,101.309788 124.638137,101.914033 C124.700637,102.172052 124.885542,102.568042 125.248042,102.910731 C125.564788,103.210495 126.10441,103.544222 126.87375,103.431014 C128.248514,103.229363 129.051816,102.777948 129.059835,102.773231 C129.622807,102.452948 130.342618,102.643042 130.667854,103.203184 C130.99309,103.76309 130.810071,104.478184 130.252524,104.807901 C130.135071,104.877476 129.050165,105.495401 127.215967,105.764741 C126.997335,105.796816 126.780354,105.812618 126.565731,105.812618", fill: "#91AFAC" }))))));
};
var Wrapper = styled.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n"], ["\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n"])));
var Svg = styled.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n\n  &.s {\n    width: 166px;\n    height: 166px;\n  }\n\n  &.m {\n    width: 250px;\n    height: 250px;\n  }\n\n  &.l {\n    width: 375px;\n    height: 375px;\n  }\n"], ["\n  display: block;\n\n  &.s {\n    width: 166px;\n    height: 166px;\n  }\n\n  &.m {\n    width: 250px;\n    height: 250px;\n  }\n\n  &.l {\n    width: 375px;\n    height: 375px;\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=BlankImage.js.map