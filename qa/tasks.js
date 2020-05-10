// '#chaptercontent'
async function task(info, index) {
  info.selector = '#chaptercontent';
  const result = await goPage(info, info => {
    // 这里是沙箱，要传递变量才能读取外部变量
    const el = document.querySelector(info.selector);
    // return arr.map(el => el.innerText);
    return el.innerHTML.replace(/<br>/g, '/n');
  });

  printResult({
    dist: './text/output/',
    name: `${index}.${info.title}`,
    content: result,
  });
}

// 任务不能一下子全跑，太多会直接搞崩溃
// 可以使用多 worker 来跑，并且搞个任务队列处理（自动拆分任务）
// 建立任务无需关注任务拆分
// 使用一个工具自动拆分任务以及利用多进程去跑，如何实现

// .slice(0, 1500)
const tasks = alldir.slice(1020).map((item, index) => {
  return task(item, index + 1);
});

await Promise.all(tasks);
