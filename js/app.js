
var express = require('express')
var bodyParser = require('body-parser')
var proxy = require('http-proxy-middleware');
var app = express()

app.use('/public/', express.static('./public/'))
app.use('/manga/', express.static('./html/manga/'))
app.use('/summary/', express.static('./html/summary/'))
app.use('/training/', express.static('./html/training/'))
app.use('/knowledge/', express.static('./html/knowledge/'))
app.use('/item/', express.static('./html/item/'))
app.use('/grade/', express.static('./html/grade/'))
app.use('/interact/', express.static('./html/interact/'))
app.use('/netspace/', express.static('./html/netspace/'))
app.use('/log/', express.static('./html/log/'))
app.use('/qkl/', express.static('./html/qkl/'))
app.use('/waiguoren/', express.static('./html/waiguoren/'))
app.use('/zhuishu/', express.static('./html/zhuishu/'))
// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'))
let whitlist = ['http://localhost:8080/']
app.use( function(req, res, next) {
  let origin =req.headers.origin;
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var login = require('./public/js/login');
var studentk = require('./public/js/studentk');
var teacher = require('./public/js/teacher');
var systemecharts = require('./public/js/systemecharts');
var admin = require('./public/js/admin');
var knowledgeteacher = require('./public/js/knowledgeteacher');
var employmentsss = require('./public/js/employmentsss');
var chet = require('./public/js/chet');
var qkl = require('./public/js/qkl');
const hostname = '0.0.0.0';
var comments = [
  {
    name: '东北大鹌鹑',
    message: '来斗鱼96291直播间给大伙发个1000块春节大红包！',
    dateTime: '2019-12-09 11:22:33'
  },
  {
    name: '河源吴彦祖',
    message: '小老弟还不错哦！',
    dateTime: '2019-12-06 13:55:55'
  },
  {
    name: '吃惯群众',
    message: '吸槟榔嘛，牙嘿嘿的那种哦！',
    dateTime: '2019-12-06 13:48:24'
  },
  {
    name: '张糊涂',
    message: '不容易！',
    dateTime: '2019-12-06 9:48:33'
  },
  {
    name: '悟空',
    message: '菩提本无物，何处惹尘埃',
    dateTime: '2019-12-06 09:42:33'
  },
  {
    name: '悟能',
    message: '大师兄，妖怪来了！',
    dateTime: '2019-12-06 09:41:33'
  },
  {
    name: '悟净',
    message: '大师兄，二师兄，妖怪来了！',
    dateTime: '2019-12-06 09:40:33'
  },
  {
    name: '金禅子',
    message: '我本将心照明月，奈何明月照沟渠',
    dateTime: '2019-12-06 09:40:00'
  }
]

  app.get('/', function (req, res) {
    res.render('index.html', {
      comments: comments
    })
  })
  
  app.get('/post', function (req, res) {
    res.render('post.html')
  })
  app.get('/login', function (req, res) {
    let loginabout=req.query.userId
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if(loginabout=='sss'){
        res.end(login.student)
    }
    else if(loginabout=='ttt'){
        res.end(login.teacher)
    }
    else if(loginabout=='admin'){
        res.end(login.admin)
    }else{
        res.end(login.badrq)
    }
    
  })
  app.post('/login', function (req, res) {
    var loginabout=req.body.username
    console.log(loginabout)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.student)
  })
  app.get('/monitor/user_login_times', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.lasttime)
  })
  app.get('/user/info', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.logininfo)
  })
  
  app.get('/employment/index/indexStudentMixedGraph', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.studentimg)
  })

  app.get('/user/detail', function (req, res) {
    let detailbout=req.query.userId
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if(detailbout=='sss'){
        res.end(login.detailsss)
    }
    else if(detailbout=='ttt'){
        res.end(login.detailttt)
    }
    else if(detailbout=='admin'){
        res.end(login.admin)
    }
  })

  app.get('/base/course/list/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listStudentCourses)
  })
  
  app.get('/base/course/detail/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getStudentCourseDetail)
  })

  app.get('/train/exper/integrated/list/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listStudentIntegratedExpers)
  })

  app.get('/container/config/info', function (req, res) {
    let info=req.query.userId
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if(info=='admin'){
        res.end(login.student)
    }else{
        res.end(login.getContainerConfig)
    }
  })

  app.get('/user/find/user', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getUserInfo)
  })

  app.get('/train/contents/progress', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getCurrentProgress)
  })

  app.get('/train/contents/browse_tree', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listBrowseContentsTree)
  })

   app.get('/train/experbook/list/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listStudentExperBooks)
  })

  app.get('/details/list/student/major/ability', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.ability)
  })

  app.get('/details/list/student/checkpoint', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.checkpointInfo)
  })

  app.get('/details/list/student/subject/ability', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.studentSubjectAbility)
  })

  app.get('/question/list/teacher/recommend/question', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.conciseRecommendQuestion)
  })

  app.get('/teacher/list/student/advantages/disadvantages', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.studentAdvantagesDisadvantages)
  })

  app.get('/competitive/student/ranking', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.competitiveRanking)
  })

   app.get('/details/student/knowledge', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.knowledgeAbility)
  })

   app.get('/details/subject/mock/exam/score', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.mockExamScore)
  })

  app.get('/subject/list/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.studentSubject)
  })

  app.get('/details/competitive/ranking', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.ranking)
  })

  app.get('/chapter/checkpoint', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.checkpoint)
  })

  app.get('/question/list/error/question', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.errorBook)
  })

  app.get('/question/list/checkpoint', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.checkpointQuestion)
  })

  app.get('/question/practice', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.practice)
  })

  app.get('/question/list/teacher/recommend', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.teacherRecommend)
  })

  app.get('/question/recommended', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(studentk.systemRecommend)
  })

  app.get('/employment/index/indexMixedGraph', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.indexMixedGraph)
  })

  app.get('/user/login_info/get_user_times', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.logintime)
  })

  app.get('/base/classes/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listTeacherClasses)
  })

  app.get('/base/classes/find', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getClassesInfo)
  })


  app.get('/user/login_info/get_class_times', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.classlogintime)
  })

  app.get('/user/count/classes_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.classcount)
  })

  app.get('/base/course/list/teacher/unique', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listTeacherCoursesUnique)
  })

  app.get('/base/course/detail', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getCourseDetail)
  })

  app.get('/train/exper/integrated/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listTeacherIntegratedExpers)
  })

  // app.get('/train/exper/verifiability/list/teacher', function (req, res) {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  //   res.end(teacher.listTeacherVerifiabilityExpers)
  // })

  // app.get('/container/image/list/platform_image', function (req, res) {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  //   res.end(teacher.listPlatformImages)
  // })

  app.get('/train/score/count/commit', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.countCommit)
  })

  app.get('/train/score/count/score_type', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.countScoreType)
  })

  app.get('/train/score/count/score_section', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.countScoreSection)
  })

  app.get('/train/score/list/exper_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listScoresByExperId)
  })

  app.get('/grade/accuracy/student/avg/accuracy', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.averageScore)
  })

  app.get('/monitor/system/info', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.getusage)
  })

  app.get('/user/monitor/user_distribution', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.userSpread)
  })

  app.get('/employment/admin/common/student/by/classesId', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.byClassesIdAdminCommon)
  })

  app.get('/employment/teacher/common/student/by/classesId', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.byClassesIdAdminCommon)
  })

  app.get('/employment/student/station/getCiYun', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.getCiYun)
  })

  app.get('/train/exper/verifiability/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.listTeacherVerifiabilityExpers)
  })

  app.get('/train/exper/integrated/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.listTeacherIntegratedExpers)
  })

  app.get('/train/report/list/exper_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(systemecharts.listReportsByExperId)
  })

  app.get('/base/classes/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listClasses)
  })

  app.get('/base/classes/find', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.getClassesInfo)
  })

  app.get('/user/list/classes_id/online', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listClassesUsers)
  })

  app.get('/user/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listTeachers)
  })

  app.get('/user/list/researcher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listresearcher)
  })

  app.get('/base/course/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listClasses)
  })

  app.get('/base/schedule/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listSchedules)
  })

  app.get('/container/image/list/platform_image', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listPlatformImages)
  })

  app.get('/container/image/list/user_image', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.listUserImages)
  })

  app.get('/employment/scrapy/getjobs', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(admin.dataCollect)
  })

  app.get('/teacher/list/class', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.listClass)
  })

  app.get('/teacher/list/user/by/class', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.listClassStudent)
  })

  app.get('/teacher/student/subject/major/ability', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.majorAbility)
  })

  app.get('/teacher/list/class/subject', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.listSubject)
  })

  app.get('/teacher/list/class/advantages/disadvantages', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.advantagesDisadvantages)
  })

  app.get('/teacher/list/class/checkpoint', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.classCheckpoint)
  })

  app.get('/teacher/list/class/competitive', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.classcompetitive)
  })

  app.get('/teacher/subject/knowledge', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.subjectKnowledge)
  })

  app.get('/teacher/student/score/practice/relationship', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.studentScoreRelationship)
  })

  app.get('/question/often/error', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.oftenError)
  })

  app.get('/teacher/list/class/test/score', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.testScore)
  })

  app.get('/teacher/student/subject/ability', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.subjectAbility)
  })

  app.get('/teacher/list/class', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.listClass)
  })

  app.get('/question/all', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.questions)
  })

  app.get('/question/select/info', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.getQuestionInfo)
  })

  app.get('/question/type/all', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.questionType)
  })

  app.get('/subject/list/teacher', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.teacherSubject)
  })

  app.get('/subject/list/profession', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.profession)
  })

  app.get('/chapter/select', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.chapterNode)
  })

  app.get('/test/list/teacher/create/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.teacherTest)
  })

  app.get('/test/list/student/test/paper', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(knowledgeteacher.listStudentPaper)
  })

  app.get('/employment/student/station/getCiYun_jobRequirement', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.getCiYunJobRequirement)
  })

  app.get('/employment/student/courselist/sumNengLi', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.sumNengLi)
  })

  app.get('/grade/indicator/common/student', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.commonStudent)
  })

  app.get('/employment/student/station/initJob', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.initJob)
  })

  app.get('/employment/student/station/jobRecommend', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.jobRecommend)
  })

  app.get('/user/list/classes_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.studentInfo)
  })

  app.get('/grade/indicator/common/avg/classes', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(employmentsss.avgClasses)
  })

  app.get('/grade/accuracy/student/all/accuracy', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listAccuracyStudent)
  })
// 学生获取课程章节进度信息
  app.get('/grade/course/student/study/progress', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getStudyProgress)
  })
// 获取班级指标（最高、最低、平均值） 
  app.get('/grade/indicator/teacher/classes', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getClassIndicator)
  })
// 班级总评成绩分布
  app.get('/grade/indicator/teacher/score/distribution', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getScoreDistribution)
  })
// 班级总评成绩后进榜 【老师】
  app.get('/grade/indicator/teacher/score/backwardn', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listBackwardn)
  })
// 获取指定班级进步榜 
  app.get('/grade/indicator/teacher/score/progress', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listProgress)
  })
// 查看班级的全部课程（老师）
  app.get('/base/course/list/classes_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listCourseByClass)
  })
// 根据班级课程查看实验手册列表分页【老师】
  app.get('/grade/report/list/by/class', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listGradeSheet)
  })
// 根据班级和实验报告id查询合格率
  app.get('/grade/report/pass/rate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.percentOfPass)
  })
// 根据班级和实验报告id查询成绩分布情况
  app.get('/grade/report/distribution', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.getReportDistribution)
  })
// 获取班级学生列表
  app.get('/grade/accuracy/classes/student/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listStudent)
  })
// 班级学生课程章节学习进度列表
  app.get('/grade/course/study/chapter/progress', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listSchedule)
  })
// 获取班级共同课程 【老师】
  app.get('/grade/accuracy/course/common', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.listCourseCommon)
  })
// 获取班级对比信息 【老师】
  app.get('/grade/accuracy/classes/contrast', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(teacher.classContrast)
  })
// 查看自己容器列表(学生)
  app.get('/container/list/user', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getlistImage)
  })
// 查看自己章节(学生)
  app.get('/train/exper/integrated/info', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getIntegratedExperInfo)
  })
// 查看自己快照(学生)
  app.get('/container/image/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listImage)
  })
// 查看自己学习章节列表(学生)
  app.get('/train/report/find_content/exper_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getReportContentByExperId)
  })
// 查看自己学习章节列表(学生)
  app.get('/train/contents/episode/find_content/contents', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getEpisodeContentByContents)
  })
// 查看自己学习下一章节列表(学生)
  app.get('/train/contents/next', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getNextProgress)
  })
// 查看自己学习上一章节列表(学生)
  app.get('/train/contents/back', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getBackProgress)
  })
// 查看自己学习当前一章节列表(学生)
  app.get('/train/execution/timing', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getTiming)
  })
// 查看自己学习下一章节详情(学生)
  app.get('/train/report/find/exper_id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getReportByExperId)
  })
// 查看自己学习下一章节详情(学生)
  app.get('/container/image/list/platform_image?pageNum=0&pageSize=0', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.containerlist)
  })
// 查看自己学习下一章节详情(学生)
  app.get('/train/experbook/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listExperBooks)
  })
// 编辑自己学习下一章节详情(老师)
  app.get('/train/experbook/find', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getExperBookInfo)
  })
// 编辑自己学习下一章节详情(老师)
  app.get('/train/knowledge/list', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listKnowledges)
  })
// 编辑自己学习下一章节详情(老师)
  app.get('/train/contents/tree', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.listContentsTree)
  })
// 编辑自己学习下一章节详情(老师)
  app.get('/train/contents/episode/find', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(login.getEpisodeInfo)
  })
// 获取群组列表(学生)
  app.get('/interact/chat/init', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getFriendList)
  })
// 获取申请数目(学生)
  app.get('/interact/chat/getRequest', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getRequest)
  })
// 获取与某个用户的聊天记录(学生)
  app.get('/interact/chatMsg/listMsgsInFriend', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getUserChatMsg)
  })
// 获取群组聊天消息(学生)
  app.get('/interact/chatGroupMsg/listGMsgs', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getGroupChatMsg)
  })
// 获取所有课程信息(学生)
  app.get('/netspace/portal/listAllCourseOptionVo', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getAllCourseList)
  })
// 获取课程详情(学生)
  app.get('/netspace/portal/getCourse', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listCourseDetails)
  })
// 获取课程章节详情(学生)
  app.get('/netspace/portal/listChapter', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listChapter)
  })
// 获取课程大纲和进度表(学生)
  app.get('/netspace/portal/getCourseOutline', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getCourseOutline)
  })
// 获取软件资源列表(学生)
  app.get('/netspace/portal/listSoftwareFile', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listSoftwareFile)
  })
// 获取共享资源文件列表(学生)
  app.get('/netspace/portal/listCourseUserFiles', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listSharingFile)
  })
// 获取章节以及章节资源信息(学生)
  app.get('/netspace/portal/listChapterResource', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listChapterResource)
  })
// 获取资源地址(学生)
  app.get('/netspace/portal/visitResourceFilePath', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getFileSrc)
  })
// 获取章节测试卷(学生)
  app.get('/netspace/portal/listTestQuestions', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listTestQuestions)
  })
// 获取用户资源列表(学生)
  app.get('/netspace/portal/listUserFiles', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listUserFiles)
  })
// 获取用户资源权限列表(学生)
  app.get('/netspace/portal/listFilePermission', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listFilePermission)
  })
// 获取用户空间大小(学生)
  app.get('/netspace/portal/getUserSpace', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.getUserSpace)
  })
// 获取用户选修课程(学生)
  app.get('/netspace/portal/getUserCourseList', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(chet.listUserCourses)
  })
// 获取用户选修课程(学生)
  app.get('/user/login_info/get_user_log', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    console.log(req.headers)
    res.end(chet.queryLog)
  })


// 获取所有学生详情(老师)
  app.get('/api/cert/redis', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(qkl.allStudent)
  })





  // 当以 POST 请求 /post 的时候，执行指定的处理函数
  // 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
  app.post('/post', function (req, res) {
    // 1. 获取表单 POST 请求体数据
    // 2. 处理
    // 3. 发送响应
  
    // req.query 只能拿 get 请求参数
    // console.log(req.query)
  
    var comment = req.body
    var timeStr = '-';
    var curDate = new Date();
    var curYear =curDate.getFullYear();  //获取完整的年份(4位,1970-????)
    var curMonth = curDate.getMonth()+1<10?'0'+(curDate.getMonth()+1):curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
    var curDay = curDate.getDate()<10?'0'+curDate.getDate():curDate.getDate();       //获取当前日(1-31)
    var curWeekDay = curDate.getDay()<10?'0'+curDate.getDay():curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
    var curHour = curDate.getHours()<10?'0'+curDate.getHours():curDate.getHours();      //获取当前小时数(0-23)
    var curMinute = curDate.getMinutes()<10?'0'+curDate.getMinutes():curDate.getMinutes();   // 获取当前分钟数(0-59)
    var curSec =curDate.getSeconds()<10?'0'+curDate.getSeconds():curDate.getSeconds();      //获取当前秒数(0-59)
    var Current= curYear+timeStr+curMonth+timeStr+curDay+' '+curHour+':'+curMinute+':'+curSec;
    comment.dateTime = Current
    comments.unshift(comment)
  
    // res.send
    // res.redirect
    // 这些方法 Express 会自动结束响应
    res.redirect('/')
    // res.statusCode = 302
    // res.setHeader('Location', '/') 
  })
  
  // app.get('/pinglun', function (req, res) {
  //   var comment = req.query
  //   comment.dateTime = '2017-11-5 10:58:51'
  //   comments.unshift(comment)
  //   res.redirect('/')
  //   // res.statusCode = 302
  //   // res.setHeader('Location', '/')
  // })

  app.use('/api', proxy({
    target: 'http://api.zhuishushenqi.com/',
    pathRewrite: {'^/api' : ''}, 
    changeOrigin: true
  }
  ));
  
  app.use('/chapter2', proxy({
    target: 'http://chapter2.zhuishushenqi.com/',
    pathRewrite: {'^/chapter2' : ''},
    changeOrigin: true
  }
  ));
  
 

  
  app.listen(3000,hostname, function () {
    console.log('running...')
  })
