(() => {
  'use strict';

  const translations = {
    en: {
      workspace:'WORKSPACE',overview:'Overview',newAnalysis:'New analysis',yourData:'YOUR DATA',historyEmpty:'Your recent files will<br />appear here',privateByDesign:'Private by design',privateCopy:'Files stay in this browser',localOnly:'LOCAL ONLY',eyebrow:'YOUR SPREADSHEET, IN FOCUS',welcomeTitle:'Make better decisions<br class="mobile-break" /> with your data.',welcomeSubtitle:'A clear, private first look at every spreadsheet.',uploadFile:'Upload a file',dropTitle:'Drop your spreadsheet here',dropSubtitle:'or click to browse from your device',supportedTypes:'XLSX, XLS, XLSM, ODS or CSV · Up to 25 MB',chooseFile:'Choose file',privacyNote:'Your file is processed locally and never uploaded to a server.',sheet:'Sheet',downloadReport:'Download report',exportClean:'Export cleaned data',dataPreview:'Data preview',previewCaption:'A read-only look at the first rows',distribution:'Column distribution',distributionCaption:'Explore values in a field',field:'Field',qualityChecks:'Data quality checks',qualityCaption:'Signals to review before analysis',columnProfile:'Column profile',profileCaption:'Completeness and numeric summary',allFields:'ALL FIELDS',cleanExportTitle:'Create a clean copy',cleanExportCaption:'Your original stays untouched. Choose what to leave out of the downloaded file.',removeDuplicates:'Remove exact duplicate rows',removeBlankRows:'Remove completely blank rows',downloadCleanCopy:'Download clean copy',analysisDisclaimer:'Automated checks highlight patterns for review. Statistical outliers are not necessarily errors. Verify business meaning before changing data.',gettingStarted:'GETTING STARTED',startTitle:'From raw rows to a clearer picture.',startCaption:'A practical workspace for your first pass at spreadsheet data.',step1Title:'Bring your data',step1Text:'Choose an Excel or CSV file from your device.',step2Title:'Review the signals',step2Text:'See missing values, duplicates and unusual ranges.',step3Title:'Take it with you',step3Text:'Export a structured report or a cleaned copy.',sampleHint:'Want to see how it works?',loadSample:'Load sample data',footerPrivacy:'Built for careful, local-first analysis',rows:'Rows',columns:'Columns',missingCells:'Missing cells',duplicates:'Exact duplicates',records:'records',fields:'fields',acrossDataset:'across dataset',rowsToReview:'rows to review',noMissing:'No missing values found',noDuplicates:'No exact duplicate rows found',outliers:'Outlier signals',noOutliers:'No IQR outlier signals found',outlierDetail:'{n} numeric cells outside the IQR fences',blankRows:'Completely blank rows',noBlankRows:'No completely blank rows',number:'NUMBER',text:'TEXT',date:'DATE',empty:'EMPTY',complete:'complete',mean:'mean',median:'median',min:'min',max:'max',standardDeviation:'std dev',noNumeric:'No numeric summary',page:'Page {page} of {pages}',showingRows:'Showing rows {from}–{to} of {total}',noRows:'No data rows',column:'Column',value:'Value',loadError:'Could not read this file. Make sure it is a valid spreadsheet or CSV.',fileTooLarge:'This file is larger than 25 MB. Please choose a smaller file.',xlsxUnavailable:'Excel support needs the SheetJS library. Reconnect to the internet and reload, or use CSV.',chartUnavailable:'Chart library unavailable — showing a compact value preview.',sampleLoaded:'Sample data loaded.',reportDownloaded:'Structured analysis report downloaded.',cleanDownloaded:'Clean copy downloaded: {count} rows kept, {removed} rows removed.',noData:'Upload a spreadsheet first.',upload:'Upload',reportTitle:'Spreadsheet analysis report',generated:'Generated',sourceFile:'Source file',worksheet:'Worksheet',datasetSummary:'Dataset summary',qualitySummary:'Data quality',missingByColumn:'Missing values by column',descriptiveStats:'Descriptive statistics',outlierSignals:'Outlier signals (IQR rule)',cleaning:'Export cleaning options',methodology:'Methodology and limits',validation:'Suggested validation',privacyMethod:'Data is processed in this browser. No file data is sent to a server.',outlierMethod:'Outliers use the 1.5×IQR fence. A flagged value is a review signal, not proof of an error.',duplicateMethod:'Duplicates are exact matches across every data column.',numericMethod:'Numeric summaries include values recognized as numbers. Standard deviation is population standard deviation.',validation1:'Reconcile key totals against the source spreadsheet.',validation2:'Spot-check flagged records in their original context.',validation3:'Confirm units, date ranges, and business definitions.',none:'None',bytes:'bytes',unknown:'Unknown',removeDuplicateRows:'Remove exact duplicates',removeBlank:'Remove fully blank rows',downloadCsv:'Download CSV',downloadXlsx:'Download XLSX',noSheet:'No worksheets found.',csvDelimiter:'Delimiter',outlierRange:'IQR fences: {low} to {high}',type:'Type',nonEmpty:'Non-empty',summary:'Summary',unique:'unique',categories:'categories',noChartValues:'No values available to chart',filename:'File',of:'of'
    },
    zh: {
      workspace:'工作区',overview:'概览',newAnalysis:'新建分析',yourData:'你的数据',historyEmpty:'最近打开的文件将<br />显示在这里',privateByDesign:'隐私优先',privateCopy:'文件只留在此浏览器',localOnly:'仅本地处理',eyebrow:'让表格数据一目了然',welcomeTitle:'用数据，做出<br class="mobile-break" />更清晰的判断。',welcomeSubtitle:'在私密的工作区里，快速看清每一份表格。',uploadFile:'上传文件',dropTitle:'将表格拖到这里',dropSubtitle:'或点击从设备中选择',supportedTypes:'支持 XLSX、XLS、XLSM、ODS、CSV · 最大 25 MB',chooseFile:'选择文件',privacyNote:'文件仅在浏览器本地处理，不会上传到服务器。',sheet:'工作表',downloadReport:'下载分析报告',exportClean:'导出清洗数据',dataPreview:'数据预览',previewCaption:'只读查看前几行数据',distribution:'字段分布',distributionCaption:'查看某个字段的取值情况',field:'字段',qualityChecks:'数据质量检查',qualityCaption:'分析前值得关注的信号',columnProfile:'字段概况',profileCaption:'完整度和数值统计',allFields:'全部字段',cleanExportTitle:'生成清洗副本',cleanExportCaption:'原始文件不会被修改。选择要从下载副本中移除的内容。',removeDuplicates:'移除完全重复的行',removeBlankRows:'移除整行空白记录',downloadCleanCopy:'下载清洗副本',analysisDisclaimer:'自动检查用于提示可能的规律。统计异常不一定是错误；修改前请核实业务含义。',gettingStarted:'快速上手',startTitle:'从原始数据，看到更清晰的图景。',startCaption:'帮助你快速完成表格数据的第一轮检查。',step1Title:'导入数据',step1Text:'从设备中选择 Excel 或 CSV 文件。',step2Title:'查看检查结果',step2Text:'发现缺失值、重复记录和异常范围。',step3Title:'导出结果',step3Text:'下载结构化报告或清洗后的副本。',sampleHint:'想先看看效果？',loadSample:'加载示例数据',footerPrivacy:'为谨慎、优先本地处理的数据分析而设计',rows:'数据行',columns:'字段数',missingCells:'缺失单元格',duplicates:'完全重复行',records:'行',fields:'个字段',acrossDataset:'全表合计',rowsToReview:'行待核实',noMissing:'未发现缺失值',noDuplicates:'未发现完全重复行',outliers:'异常值信号',noOutliers:'未发现 IQR 异常值信号',outlierDetail:'{n} 个数值位于 IQR 范围之外',blankRows:'整行空白',noBlankRows:'未发现整行空白记录',number:'数值',text:'文本',date:'日期',empty:'空字段',complete:'完整',mean:'均值',median:'中位数',min:'最小值',max:'最大值',standardDeviation:'标准差',noNumeric:'无数值统计',page:'第 {page} / {pages} 页',showingRows:'显示第 {from}–{to} 行，共 {total} 行',noRows:'没有数据行',column:'字段',value:'数值',loadError:'无法读取此文件。请确认它是有效的表格或 CSV 文件。',fileTooLarge:'文件超过 25 MB，请选择较小的文件。',xlsxUnavailable:'Excel 支持需要 SheetJS 库。请联网后刷新页面，或改用 CSV 文件。',chartUnavailable:'图表库暂不可用，以下显示简化的取值预览。',sampleLoaded:'示例数据已加载。',reportDownloaded:'结构化分析报告已下载。',cleanDownloaded:'清洗副本已下载：保留 {count} 行，移除 {removed} 行。',noData:'请先上传表格。',upload:'上传',reportTitle:'表格分析报告',generated:'生成时间',sourceFile:'源文件',worksheet:'工作表',datasetSummary:'数据概况',qualitySummary:'数据质量',missingByColumn:'各字段缺失值',descriptiveStats:'描述性统计',outlierSignals:'异常值信号（IQR 规则）',cleaning:'导出清洗选项',methodology:'方法与限制',validation:'建议的验证步骤',privacyMethod:'数据仅在当前浏览器处理，不会发送到服务器。',outlierMethod:'异常值按 1.5×IQR 边界识别。标记只表示需要核实，并不证明数据有误。',duplicateMethod:'重复行指所有数据字段完全相同的记录。',numericMethod:'数值统计基于可识别为数字的值；标准差使用总体标准差。',validation1:'将关键汇总与源表核对。',validation2:'回到原始记录抽查被标记的行。',validation3:'确认单位、日期范围和业务口径。',none:'无',bytes:'字节',unknown:'未知',removeDuplicateRows:'移除完全重复行',removeBlank:'移除整行空白',downloadCsv:'下载 CSV',downloadXlsx:'下载 XLSX',noSheet:'未发现工作表。',csvDelimiter:'分隔符',outlierRange:'IQR 边界：{low} 至 {high}',type:'类型',nonEmpty:'非空',summary:'统计',unique:'个唯一值',categories:'个类别',noChartValues:'没有可绘制的值',filename:'文件',of:'/',
    }
  };

  const state = { language:'en', fileName:'', sheets:[], sheetIndex:0, page:0, chart:null, chartLoaded:false };
  const $ = (id) => document.getElementById(id);
  const t = (key, values={}) => {
    let out = (translations[state.language] || translations.en)[key] ?? translations.en[key] ?? key;
    for (const [name,value] of Object.entries(values)) out = out.replaceAll(`{${name}}`, String(value));
    return out;
  };
  const currentSheet = () => state.sheets[state.sheetIndex];

  function applyLanguage() {
    document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $('languageLabel').textContent = state.language === 'en' ? '中文' : 'English';
    $('languageToggle').setAttribute('aria-label', state.language === 'en' ? '切换为中文' : 'Switch to English');
    if (state.sheets.length) renderAnalysis();
  }

  function showToast(message) {
    const node = $('toast'); node.textContent = message; node.classList.add('show');
    clearTimeout(showToast.timer); showToast.timer = setTimeout(() => node.classList.remove('show'), 3000);
  }

  function showNotice(message, type='error') {
    const node = $('notice'); node.textContent = message; node.className = `notice ${type}`; node.hidden = false;
  }

  function clearNotice() { $('notice').hidden = true; }

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function displayValue(value) {
    if (value === null || value === undefined || value === '') return '—';
    if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toLocaleDateString(state.language === 'zh' ? 'zh-CN' : 'en-US');
    if (typeof value === 'number') return Number.isInteger(value) ? value.toLocaleString() : value.toLocaleString(undefined,{maximumFractionDigits:4});
    return String(value);
  }

  function isMissing(value) { return value === null || value === undefined || (typeof value === 'string' && value.trim() === ''); }
  function normalizeRows(rows, width) { return rows.map(row => Array.from({length:width}, (_,i) => row?.[i] ?? null)); }
  function isBlankRow(row) { return row.every(isMissing); }
  function trimTrailingBlankRows(rows) { let end=rows.length; while(end>1 && isBlankRow(rows[end-1])) end--; return rows.slice(0,end); }

  function parseCSV(text) {
    const source = text.replace(/^\uFEFF/, '');
    const candidates = [',',';','\t','|'];
    const firstLine = source.split(/\r?\n/,1)[0] || '';
    const delimiter = candidates.map(d => ({d,n:(firstLine.match(new RegExp(d === '\t' ? '\\t' : `\\${d}`,'g'))||[]).length})).sort((a,b)=>b.n-a.n)[0].d;
    const rows=[]; let row=[], field='', quoted=false;
    for(let i=0;i<source.length;i++){
      const c=source[i];
      if(quoted){ if(c==='"' && source[i+1]==='"'){field+='"';i++;} else if(c==='"') quoted=false; else field+=c; }
      else if(c==='"' && field==='') quoted=true;
      else if(c===delimiter){row.push(field);field='';}
      else if(c==='\n'){row.push(field.replace(/\r$/,''));field='';rows.push(row);row=[];}
      else field+=c;
    }
    if(field!=='' || row.length){row.push(field.replace(/\r$/,''));rows.push(row);}
    while(rows.length && rows[rows.length-1].every(v=>String(v??'').trim()==='')) rows.pop();
    return {rows,delimiter};
  }

  function gridToSheet(name, grid) {
    const clean = trimTrailingBlankRows(grid.map(row => Array.isArray(row) ? row : []));
    if (!clean.length || clean[0].length === 0) return {name,headers:[],rows:[]};
    const width = Math.max(...clean.map(row=>row.length));
    const padded = normalizeRows(clean,width);
    const rawHeaders = padded[0].map((v,i)=>isMissing(v) ? `Column ${i+1}` : String(v).trim());
    const seen = new Map();
    const headers = rawHeaders.map((h,i)=>{const n=(seen.get(h)||0)+1;seen.set(h,n);return n>1?`${h} (${n})`:h;});
    return {name,headers,rows:padded.slice(1)};
  }

  async function readFile(file) {
    if(file.size > 25*1024*1024){showNotice(t('fileTooLarge'));return;}
    clearNotice();
    try {
      const ext = file.name.split('.').pop().toLowerCase();
      if(ext==='csv'){
        const parsed=parseCSV(await file.text());
        if(!parsed.rows.length) throw new Error('empty');
        state.sheets=[gridToSheet('CSV',parsed.rows)]; state.csvDelimiter=parsed.delimiter;
      } else {
        if(!window.XLSX){showNotice(t('xlsxUnavailable'));return;}
        const workbook=XLSX.read(await file.arrayBuffer(),{type:'array',cellDates:true,raw:true});
        state.sheets=workbook.SheetNames.map(name=>gridToSheet(name,XLSX.utils.sheet_to_json(workbook.Sheets[name],{header:1,raw:true,defval:null,blankrows:true})));
        state.sheets=state.sheets.filter(s=>s.headers.length);
        if(!state.sheets.length) throw new Error('empty');
      }
      state.fileName=file.name; state.sheetIndex=0; state.page=0;
      $('starterCard').hidden=true; $('analysisArea').hidden=false; $('uploadPanel').hidden=true;
      renderAnalysis();
    } catch(error) { console.error(error); showNotice(t('loadError')); }
  }

  function numValue(v) {
    if(typeof v==='number' && Number.isFinite(v)) return v;
    if(typeof v==='string' && v.trim()!=='' && /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(v.trim())) {const n=Number(v);return Number.isFinite(n)?n:null;}
    return null;
  }

  function numericInfo(sheet,colIndex) {
    const values=sheet.rows.map(r=>r[colIndex]).filter(v=>!isMissing(v));
    const nums=values.map(numValue);
    const valid=nums.filter(n=>n!==null);
    if(!valid.length || valid.length/values.length<0.75) return null;
    const unique=new Set(values.map(v=>String(v))).size;
    if(values.length>=8 && unique/values.length>0.96 && !/amount|price|sales|revenue|cost|profit|quantity|qty|score|rate|percent|value|金额|销售|数量|单价|得分|比例|收入|成本|利润/i.test(sheet.headers[colIndex])) return null;
    return valid;
  }

  function quantile(sorted,q){if(!sorted.length)return 0;const pos=(sorted.length-1)*q;const base=Math.floor(pos);const rest=pos-base;return sorted[base+1]===undefined?sorted[base]:sorted[base]+rest*(sorted[base+1]-sorted[base]);}
  function statsFor(values){const sorted=[...values].sort((a,b)=>a-b),n=sorted.length;if(!n)return null;const sum=values.reduce((a,b)=>a+b,0),mean=sum/n;const variance=values.reduce((a,b)=>a+(b-mean)**2,0)/n;return{count:n,mean,median:quantile(sorted,.5),min:sorted[0],max:sorted[n-1],stdDev:Math.sqrt(variance),q1:quantile(sorted,.25),q3:quantile(sorted,.75)};}

  function analyze(sheet) {
    const missingByColumn=sheet.headers.map((name,i)=>({name,count:sheet.rows.reduce((n,row)=>n+(isMissing(row[i])?1:0),0)}));
    const exactSeen=new Map(),duplicateIndexes=[];
    sheet.rows.forEach((row,i)=>{const key=JSON.stringify(row.map(v=>v instanceof Date?{date:v.toISOString()}:v));if(exactSeen.has(key)) duplicateIndexes.push(i);else exactSeen.set(key,i);});
    const blankIndexes=[];sheet.rows.forEach((row,i)=>{if(isBlankRow(row))blankIndexes.push(i);});
    const numeric=sheet.headers.map((name,i)=>({name,index:i,values:numericInfo(sheet,i)})).filter(x=>x.values);
    const outliers=[];
    for(const col of numeric){const st=statsFor(col.values);if(!st||st.count<4)continue;const iqr=st.q3-st.q1,low=st.q1-1.5*iqr,high=st.q3+1.5*iqr;const flagged=[];sheet.rows.forEach((row,rowIndex)=>{const n=numValue(row[col.index]);if(n!==null&&(n<low||n>high))flagged.push({row:rowIndex+1,value:n});});if(flagged.length)outliers.push({column:col.name,low,high,flagged});}
    const columns=sheet.headers.map((name,index)=>{
      const vals=sheet.rows.map(r=>r[index]).filter(v=>!isMissing(v));
      const nums=numericInfo(sheet,index);
      const dates=vals.length>0&&vals.filter(v=>v instanceof Date).length/vals.length>.6;
      const type=nums?'NUMBER':dates?'DATE':vals.length?'TEXT':'EMPTY';
      return {name,index,type,nonEmpty:vals.length,missing:sheet.rows.length-vals.length,unique:new Set(vals.map(v=>v instanceof Date?v.toISOString():String(v))).size,stats:nums?statsFor(nums):null};
    });
    return {missingByColumn,missingTotal:missingByColumn.reduce((n,c)=>n+c.count,0),duplicateIndexes,blankIndexes,numeric,outliers,columns};
  }

  function renderAnalysis() {
    const sheet=currentSheet();if(!sheet)return;
    const a=analyze(sheet);
    $('fileName').textContent=state.fileName;
    $('fileMeta').textContent=`${sheet.rows.length.toLocaleString()} ${t('records')} · ${sheet.headers.length} ${t('fields')}`;
    const select=$('sheetSelect');select.innerHTML=state.sheets.map((s,i)=>`<option value="${i}" ${i===state.sheetIndex?'selected':''}>${esc(s.name)}</option>`).join('');
    renderStats(sheet,a); renderPreview(sheet); renderQuality(sheet,a); renderProfile(a); renderChartField(sheet); renderChart(sheet);
  }

  function renderStats(sheet,a){
    const items=[{key:'rows',value:sheet.rows.length,icon:'↕',tone:'blue',note:t('records')},{key:'columns',value:sheet.headers.length,icon:'▥',tone:'teal',note:t('fields')},{key:'missingCells',value:a.missingTotal,icon:'◌',tone:'orange',note:t('acrossDataset')},{key:'duplicates',value:a.duplicateIndexes.length,icon:'⧉',tone:'purple',note:t('rowsToReview')}];
    $('statGrid').innerHTML=items.map(x=>`<article class="stat-card tone-${x.tone}"><div class="stat-top"><span class="stat-label">${t(x.key)}</span><span class="stat-icon">${x.icon}</span></div><div class="stat-value">${Number(x.value).toLocaleString()}</div><div class="stat-note">${x.note}</div></article>`).join('');
  }

  function renderPreview(sheet){
    const size=10, pages=Math.max(1,Math.ceil(sheet.rows.length/size));state.page=Math.min(state.page,pages-1);const start=state.page*size,rows=sheet.rows.slice(start,start+size);
    $('dataTable').innerHTML=`<thead><tr><th>#</th>${sheet.headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map((row,i)=>`<tr><td>${start+i+1}</td>${sheet.headers.map((_,c)=>`<td title="${esc(displayValue(row[c]))}">${esc(displayValue(row[c]))}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${sheet.headers.length+1}">${t('noRows')}</td></tr>`}</tbody>`;
    $('previewCount').textContent=`${Math.min(size,sheet.rows.length-start)} / ${sheet.rows.length}`;
    $('pageLabel').textContent=sheet.rows.length?t('page',{page:state.page+1,pages}):t('noRows');
    $('prevPage').disabled=state.page===0;$('nextPage').disabled=state.page>=pages-1;
  }

  function renderQuality(sheet,a){
    const blankRows=a.blankIndexes.length, missing=a.missingTotal, dups=a.duplicateIndexes.length, outlierCount=a.outliers.reduce((n,x)=>n+x.flagged.length,0);
    const items=[
      {icon:missing?'!':'✓',status:missing?'warn':'good',title:t('missingCells'),detail:missing?`${missing.toLocaleString()} ${t('value')} · ${a.missingByColumn.filter(x=>x.count).length} ${t('fields')}`:t('noMissing'),count:missing},
      {icon:dups?'⧉':'✓',status:dups?'warn':'good',title:t('duplicates'),detail:dups?`${dups.toLocaleString()} ${t('rowsToReview')}`:t('noDuplicates'),count:dups},
      {icon:outlierCount?'⌁':'✓',status:outlierCount?'warn':'good',title:t('outliers'),detail:outlierCount?t('outlierDetail',{n:outlierCount}):t('noOutliers'),count:outlierCount},
      {icon:blankRows?'◌':'✓',status:blankRows?'neutral':'good',title:t('blankRows'),detail:blankRows?`${blankRows} ${t('rowsToReview')}`:t('noBlankRows'),count:blankRows}
    ];
    $('qualityList').innerHTML=items.map(x=>`<div class="quality-row"><span class="quality-icon ${x.status}">${x.icon}</span><span class="quality-text"><strong>${x.title}</strong><small>${x.detail}</small></span><span class="quality-count">${x.count.toLocaleString()}</span></div>`).join('');
    $('qualityStatus').classList.toggle('has-issues',Boolean(missing||dups||outlierCount));
    $('qualityStatus').textContent=(missing||dups||outlierCount)?'!':'✓';
  }

  function fmt(v){return Number(v).toLocaleString(undefined,{maximumFractionDigits:3});}
  function renderProfile(a){
    $('profileList').innerHTML=a.columns.map(c=>{
      const pct=a.columns.length&&currentSheet().rows.length?Math.round(c.nonEmpty/currentSheet().rows.length*100):100;
      let summary=c.stats?`${t('mean')} ${fmt(c.stats.mean)} · ${t('median')} ${fmt(c.stats.median)} · ${t('min')} ${fmt(c.stats.min)} · ${t('max')} ${fmt(c.stats.max)}`:`${c.unique} ${t('unique')} ${t('categories')}`;
      if(!c.nonEmpty)summary=t('noNumeric');
      return `<div class="profile-row"><div class="profile-top"><span class="profile-name"><span class="type-badge">${t(c.type.toLowerCase())}</span><strong title="${esc(c.name)}">${esc(c.name)}</strong></span><span class="profile-pct">${pct}% ${t('complete')}</span></div><div class="profile-track"><i style="width:${pct}%"></i></div><div class="profile-summary">${esc(summary)}</div></div>`;
    }).join('');
  }

  function renderChartField(sheet){
    const sel=$('chartField'),old=sel.value;sel.innerHTML=sheet.headers.map((h,i)=>`<option value="${i}">${esc(h)}</option>`).join('');
    if(old && sheet.headers[Number(old)]) sel.value=old; else sel.value='0';
  }

  function chartData(sheet,index){
    const nums=numericInfo(sheet,index);
    if(nums){const min=Math.min(...nums),max=Math.max(...nums),bins=7; if(min===max)return{labels:[fmt(min)],values:[nums.length],kind:'bar',desc:`${nums.length} values`};const width=(max-min)/bins,counts=Array(bins).fill(0);for(const n of nums)counts[Math.min(bins-1,Math.floor((n-min)/width))]++;return{labels:counts.map((_,i)=>`${fmt(min+i*width)}–${fmt(i===bins-1?max:min+(i+1)*width)}`),values:counts,kind:'bar',desc:`${nums.length} values`};}
    const counts=new Map();for(const row of sheet.rows){const v=row[index];if(isMissing(v))continue;const label=displayValue(v);counts.set(label,(counts.get(label)||0)+1);}const sorted=[...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,8);return{labels:sorted.map(x=>x[0]),values:sorted.map(x=>x[1]),kind:'category',desc:`${counts.size} ${t('categories')}`};
  }

  function renderFallback(data){
    $('chartFallback').hidden=false;$('distributionChart').hidden=true;
    if(!data.labels.length){$('chartFallback').innerHTML=`<div class="fallback-bar-row">${t('noChartValues')}</div>`;return;}
    const max=Math.max(...data.values,1);$('chartFallback').innerHTML=data.labels.map((label,i)=>`<div class="fallback-bar-row"><span title="${esc(label)}">${esc(label)}</span><span class="fallback-track"><i style="width:${Math.max(2,data.values[i]/max*100)}%"></i></span><span>${data.values[i]}</span></div>`).join('');
  }

  function renderChart(sheet){
    const index=Number($('chartField').value||0),data=chartData(sheet,index),canvas=$('distributionChart');
    $('chartLegend').innerHTML=`<span>${esc(sheet.headers[index]||'')}</span><span>${esc(data.desc)}</span>`;
    if(!window.Chart){if(state.chart){state.chart.destroy();state.chart=null;}renderFallback(data);return;}
    $('chartFallback').hidden=true;canvas.hidden=false;if(state.chart)state.chart.destroy();
    state.chart=new Chart(canvas,{type:'bar',data:{labels:data.labels,datasets:[{data:data.values,backgroundColor:data.kind==='category'?'#8299e7':'#7390e3',hoverBackgroundColor:'#526fc9',borderRadius:5,maxBarThickness:data.kind==='category'?20:32,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:data.kind==='category'?'y':'x',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`${ctx.parsed[data.kind==='category'?'x':'y']} ${t('records')}`}}},scales:{x:{beginAtZero:true,grid:{color:'#f0f2f6'},ticks:{color:'#98a2b1',font:{size:9},maxRotation:data.kind==='category'?0:30}},y:{beginAtZero:true,grid:{display:data.kind==='category'},ticks:{color:'#98a2b1',font:{size:9},maxTicksLimit:8}}}}});
  }

  function makeReport(){
    const sheet=currentSheet(),a=analyze(sheet);
    return {reportTitle:t('reportTitle'),generatedAt:new Date().toISOString(),sourceFile:state.fileName,worksheet:sheet.name,dataset:{rows:sheet.rows.length,columns:sheet.headers.length,fieldNames:sheet.headers},dataQuality:{missingCells:a.missingTotal,missingByColumn:a.missingByColumn,exactDuplicateRows:a.duplicateIndexes.length,duplicateRowNumbers:a.duplicateIndexes.map(i=>i+2),completelyBlankRows:a.blankIndexes.length,blankRowNumbers:a.blankIndexes.map(i=>i+2)},descriptiveStatistics:a.columns.filter(c=>c.stats).map(c=>({column:c.name,count:c.stats.count,mean:c.stats.mean,median:c.stats.median,min:c.stats.min,max:c.stats.max,populationStandardDeviation:c.stats.stdDev})),outlierSignals:a.outliers.map(o=>({column:o.column,rule:'1.5×IQR',lowerFence:o.low,upperFence:o.high,flaggedValues:o.flagged.map(x=>({dataRowNumber:x.row+1,value:x.value}))})),exportCleaning:{removeExactDuplicateRows:$('removeDuplicates').checked,removeCompletelyBlankRows:$('removeBlankRows').checked},methodology:{privacy:t('privacyMethod'),outliers:t('outlierMethod'),duplicates:t('duplicateMethod'),numericStatistics:t('numericMethod')},suggestedValidation:[t('validation1'),t('validation2'),t('validation3')],limitations:['No LLM or remote model is connected.','Spreadsheet formatting, formulas, macros and workbook features are not preserved in the cleaned export; cell values are exported.']};
  }

  function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function safeName(name){return name.replace(/\.[^.]+$/,'').replace(/[^a-z0-9_-]+/gi,'-').replace(/^-+|-+$/g,'')||'spreadsheet';}
  function downloadReport(){if(!currentSheet()){showToast(t('noData'));return;}const report=makeReport(),blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json;charset=utf-8'});downloadBlob(blob,`${safeName(state.fileName)}-analysis-report.json`);showToast(t('reportDownloaded'));}

  function cleanedRows(sheet){
    const removeDups=$('removeDuplicates').checked,removeBlank=$('removeBlankRows').checked,seen=new Set(),rows=[];let removed=0;
    for(const row of sheet.rows){if(removeBlank&&isBlankRow(row)){removed++;continue;}const key=JSON.stringify(row.map(v=>v instanceof Date?{date:v.toISOString()}:v));if(removeDups&&seen.has(key)){removed++;continue;}seen.add(key);rows.push(row);}
    return {rows,removed};
  }

  function csvEscape(value){const s=value instanceof Date?value.toISOString():String(value??'');return /[",\r\n]/.test(s)?`"${s.replaceAll('"','""')}"`:s;}
  function exportClean(){
    const sheet=currentSheet();if(!sheet){showToast(t('noData'));return;}const result=cleanedRows(sheet);const rows=[sheet.headers,...result.rows];
    const csv='\uFEFF'+rows.map(row=>row.map(csvEscape).join(',')).join('\r\n');
    let name=`${safeName(state.fileName)}-cleaned.csv`;
    if(window.XLSX){const wb=XLSX.utils.book_new();const ws=XLSX.utils.aoa_to_sheet(rows);XLSX.utils.book_append_sheet(wb,ws,(sheet.name||'Cleaned').slice(0,31));const bytes=XLSX.write(wb,{bookType:'xlsx',type:'array'});downloadBlob(new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),`${safeName(state.fileName)}-cleaned.xlsx`);name='xlsx';}
    else downloadBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),name);
    showToast(t('cleanDownloaded',{count:result.rows.length,removed:result.removed}));
  }

  function loadSample(){
    const headers=['Order ID','Date','Region','Product','Revenue','Units','Customer'];
    const rows=[['A-1001',new Date('2026-01-04'),'North','Starter',1280,4,'Customer 01'],['A-1002',new Date('2026-01-07'),'South','Pro',2490,3,'Customer 02'],['A-1003',new Date('2026-01-12'),'East','Starter',960,3,'Customer 03'],['A-1004',new Date('2026-01-18'),'West','Team',4860,6,'Customer 04'],['A-1005',new Date('2026-02-02'),'North','Pro',3320,4,'Customer 05'],['A-1006',new Date('2026-02-09'),'South','Team',4250,5,'Customer 06'],['A-1007',new Date('2026-02-15'),'East','Starter',1110,3,'Customer 07'],['A-1008',new Date('2026-02-21'),'West','Pro',2890,4,'Customer 08'],['A-1009',new Date('2026-03-01'),'North','Team',5580,7,'Customer 09'],['A-1010',new Date('2026-03-05'),'South','Starter',980,3,'Customer 10'],['A-1011',new Date('2026-03-11'),'East','Pro',null,2,'Customer 11'],['A-1012',new Date('2026-03-18'),'West','Team',6120,8,'Customer 12'],['A-1013',new Date('2026-03-23'),'North','Pro',3320,4,'Customer 05'],['A-1014',new Date('2026-03-29'),'South','Starter',1020,3,'Customer 13'],['A-1015',new Date('2026-04-04'),'East','Team',70200,9,'Customer 14'],['A-1016',new Date('2026-04-10'),'West','Pro',3010,4,'Customer 15'],['A-1017',new Date('2026-04-14'),'North','Starter',1200,4,'Customer 16'],['A-1018',new Date('2026-04-19'),'South','Pro',2760,3,'Customer 17'],['A-1019',new Date('2026-04-24'),'East','Team',5100,6,'Customer 18'],['A-1020',new Date('2026-04-28'),'West','Starter',1080,3,'Customer 19']];
    rows.push([...rows[3]],['A-1021',new Date('2026-05-01'),'North','Team',null,7,'Customer 20']);
    state.sheets=[{name:'Orders',headers,rows}];state.fileName='sample-orders.xlsx';state.sheetIndex=0;state.page=0;state.csvDelimiter=',';$('starterCard').hidden=true;$('analysisArea').hidden=false;$('uploadPanel').hidden=true;clearNotice();renderAnalysis();showToast(t('sampleLoaded'));
  }

  $('languageToggle').addEventListener('click',()=>{state.language=state.language==='en'?'zh':'en';applyLanguage();});
  $('welcomeUpload').addEventListener('click',()=>$('fileInput').click());$('dropZone').addEventListener('click',()=>$('fileInput').click());$('navUpload').addEventListener('click',()=>{if(state.sheets.length){$('uploadPanel').hidden=false;$('fileInput').click();}else $('fileInput').click();});
  $('fileInput').addEventListener('change',e=>{const file=e.target.files?.[0];if(file)readFile(file);e.target.value='';});
  $('dropZone').addEventListener('dragover',e=>{e.preventDefault();$('dropZone').classList.add('dragging');});$('dropZone').addEventListener('dragleave',()=>$('dropZone').classList.remove('dragging'));$('dropZone').addEventListener('drop',e=>{e.preventDefault();$('dropZone').classList.remove('dragging');const file=e.dataTransfer.files?.[0];if(file)readFile(file);});
  $('sheetSelect').addEventListener('change',e=>{state.sheetIndex=Number(e.target.value);state.page=0;renderAnalysis();});$('chartField').addEventListener('change',()=>renderChart(currentSheet()));$('prevPage').addEventListener('click',()=>{state.page=Math.max(0,state.page-1);renderPreview(currentSheet());});$('nextPage').addEventListener('click',()=>{state.page++;renderPreview(currentSheet());});
  $('reportButton').addEventListener('click',downloadReport);$('cleanButton').addEventListener('click',exportClean);$('cleanButtonBottom').addEventListener('click',exportClean);$('sampleButton').addEventListener('click',loadSample);
  applyLanguage();
})();
