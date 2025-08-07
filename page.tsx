"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Calendar, MapPin, Mail, ExternalLink, Building, GraduationCap, Trophy, Star, Target, Zap, Globe, Microscope, Heart } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Newsletter() {
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - 学校介绍 */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <Image
          src="https://www.stu.edu.cn/__local/E/C8/1E/A2AB452A201A7DBE653FC10ADFC_2A1A8422_182C803.gif"
          alt="汕头大学校园"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
              <Image
                src="https://open-1252047641.cos.ap-guangzhou.myqcloud.com/img/logo-1.png"
                alt="汕头大学校徽"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">汕头大学</h1>
              <p className="text-gray-200">SHANTOU UNIVERSITY</p>
              <p className="text-sm text-gray-300">全球唯一由私人基金会持续资助的公立大学</p>
            </div>
          </div>
          
          <div className="max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                全球顶尖学者合作计划
                <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
                  {""}
                </span>
                <span className="block text-2xl md:text-3xl text-gray-600">
                  工学院、理学院及公共卫生管理学院院长招聘  
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                汕头大学是1981年经国务院批准成立的广东省省属综合性大学，
                教育部、广东省、李嘉诚基金会三方共建的高等院校。
                我们致力于培养具有奉献精神、创新能力和国际视野的高质量人才。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, number: "1,272", label: "专任教师", desc: "90%具博士学位" },
            { icon: GraduationCap, number: "23,000+", label: "在校学生", desc: "完整培养体系" },
            { icon: Award, number: "12", label: "ESI前1%学科", desc: "国际影响力" },
            { icon: Trophy, number: "52", label: "泰晤士排名", desc: "中国内地高校" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 全球顶尖学者合作计划 */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            全球合作计划
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">全球顶尖学者合作计划</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            依托国家级科研平台与粤港澳大湾区产业生态，李嘉诚基金会持续投入，
            为全球学者打造集高水平科研支持、国际合作网络与学术治理参与于一体的协同发展平台
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: "🔬",
              title: "国家科研项目联合申报",
              description: "依托重点实验室联合申报国家级项目",
              features: [
                ["科研启动经费", "专业申报辅导"],
                ["全程行政支持", "项目落地保障"]
              ]
            },
            {
              icon: "🏢",
              title: "湾区产业协同创新",
              description: "对接头部企业共建技术攻关项目",
              features: [
                ["智能制造合作", "生物医药研发"],
                ["绿色能源技术", "成果转化支持"]
              ]
            },
            {
              icon: "🎓",
              title: "博硕联合培养机制",
              description: "带队指导研究生配套完整支持体系",
              features: [
                ["博士后岗位", "教辅人员支持"],
                ["办公空间提供", "教学减负安排"]
              ]
            },
            {
              icon: "🎯",
              title: "学术管理双轨发展",
              description: "灵活学术管理路径参与学院治理",
              features: [
                ["客座顾问岗位", "院长遴选机会"],
                ["职业晋升机制", "团队组建资源"]
              ]
            }
          ].map((area, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="text-center mb-4">
                  <div className="text-2xl mb-3">{area.icon}</div>
                  <h4 className="text-base font-bold text-gray-800 mb-2 leading-tight">{area.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{area.description}</p>
                </div>
                <div className="space-y-2">
                  {area.features.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-2 gap-4">
                      {row.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3"
            onClick={() => window.open('https://wenjuan.feishu.cn/m?t=s86dqxDYoQ8i-w4fe', '_blank')}
          >
            申请加入合作计划
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 院长招聘 */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            院长招聘
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">诚聘三大学院院长</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们为杰出学者提供充分的学术自主权、丰富的资源配置和广阔的发展平台。
            在这里，您将获得李嘉诚基金会的持续支持、完善的科研基础设施、
            优秀的师资团队以及与粤港澳大湾区产业深度融合的机会。
            我们致力于为每位院长创造最佳的学术环境，助力您实现学术理想与管理抱负的完美结合。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "工学院院长",
              subtitle: "College of Engineering",
              icon: <Building className="h-10 w-10" />,
              highlights: [
                "8个本科专业，完整本硕博体系",
                "3个国家一流本科专业建设点", 
                "教育部智能制造重点实验室",
                "毕业生就业率95%以上",
                "广东省滨海智慧城市重点学科"
              ],
              stats: { students: "2,000+", faculty: "167", programs: "8" }
            },
            {
              title: "理学院院长",
              subtitle: "College of Science",
              icon: <Microscope className="h-10 w-10" />,
              highlights: [
                "2个一级学科博士点",
                "7个学科进入ESI前1%",
                "2个省级重点实验室",
                "南澳临海实验站",
                "海洋科学省重点建设学科"
              ],
              stats: { students: "2,086", faculty: "100", programs: "5" }
            },
            {
              title: "公共卫生学院院长",
              subtitle: "School of Public Health",
              icon: <Heart className="h-10 w-10" />,
              highlights: [
                "MPH教育部评估全国第三名",
                "公共卫生与预防医学硕士点",
                "中国预防医学科学院汕头分院",
                "多地实践基地与科研合作基地",
                "健康中国战略重要支撑"
              ],
              stats: { students: "500+", faculty: "45", programs: "2" }
            }
          ].map((college, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-gray-50 text-gray-600 mb-4">
                    {college.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{college.title}</h4>
                  <p className="text-gray-500 text-sm">{college.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{college.stats.students}</div>
                    <div className="text-xs text-gray-500">在校学生</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{college.stats.faculty}</div>
                    <div className="text-xs text-gray-500">专任教师</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{college.stats.programs}</div>
                    <div className="text-xs text-gray-500">本科专业</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {college.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                  onClick={() => setSelectedCollege(college.title)}
                >
                  查看职位详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 桑浦论坛邀请 */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                第七届桑浦论坛
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                国际青年学者论坛邀请
                <span className="block text-lg text-gray-600 mt-2 font-normal">汇聚全球智慧，共创学术未来</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 text-gray-700">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium">2025年11月</div>
                    <div className="text-gray-500 text-sm">线上ZOOM举办</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-gray-800 font-bold mb-3">聚焦主题</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["技术创新", "可持续发展", "全球健康", "人工智能医疗", "智慧城市", "跨学科融合"].map((topic) => (
                      <span key={topic} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    📌 论坛将汇聚全球优秀青年学者，提供前沿报告、交叉对话与合作洽谈机会，
                    亦是与汕头大学建立实质合作的优选通道。
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3"
                  onClick={() => window.open('https://wenjuan.feishu.cn/m?t=slu5voYqpQ8i-tyfx', '_blank')}
                >
                  立即报名参加论坛
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                  onClick={() => window.open('https://www.stu.edu.cn/info/1085/23676.htm', '_blank')}
                >
                  第六届桑浦论坛回顾
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://stratus.campaign-image.com.cn/images/19230000000045006_zc_v1_1754386735709_13ec3.jpg"
                alt="桑浦论坛"
                width={600}
                height={400}
                className="rounded-lg shadow-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 汕头大学核心竞争力 */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              核心竞争力
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">汕头大学独特优势</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              全球唯一由私人基金会持续资助的公立大学，中国高校改革的试验田
            </p>
          </div>

          {/* 李嘉诚基金会优势 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">李嘉诚基金会持续投入</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">全球唯一性</h5>
                    <p className="text-gray-600">全球唯一一所由私人基金会持续资助的公立大学</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">三方共建</h5>
                    <p className="text-gray-600">教育部、广东省、李嘉诚基金会三方共建高等院校</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">改革试验田</h5>
                    <p className="text-gray-600">被李岚清同志评价为"中国高校改革的试验田"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://www.stu.edu.cn/__local/5/48/F9/4AC73D1E4B6B0A4908BE4BD5619_7CF63CB2_1155C.jpg"
                alt="李嘉诚基金会"
                width={600}
                height={400}
                className="rounded-lg shadow-sm object-cover"
              />
            </div>
          </div>

          {/* 三大核心优势 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "学科实力雄厚",
                items: [
                  "国家重点学科1个",
                  "博士后流动站6个",
                  "一级博士学位授权点6个",
                  "12个学科进入ESI全球前1%"
                ]
              },
              {
                title: "国际影响力显著",
                items: [
                  "泰晤士排名中国内地高校第52位",
                  "与30个国家132所高校合作",
                  "多位教师入选全球前2%科学家",
                  "连续进入世界权威大学排行榜"
                ]
              },
              {
                title: "创新教育模式",
                items: [
                  "国际基准学分制",
                  "CDIO和OBE教育创新",
                  "书院学院双院协同",
                  "18个国家级一流本科专业"
                ]
              }
            ].map((advantage, index) => (
              <Card key={index} className="bg-gray-50 shadow-sm border border-gray-200">
                <CardContent className="p-6">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">{advantage.title}</h5>
                  <div className="space-y-3">
                    {advantage.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 东海岸校区 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://se-feed-bucket.cdn.bcebos.com/pic_all/dianpingunmount_263369009_img4.jpg"
                alt="东海岸校区"
                width={600}
                height={400}
                className="rounded-lg shadow-sm object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                最新发展
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">东海岸校区正式启用</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                2022年10月，汕头大学东海岸校区正式启用。新校区以交叉学科、新兴工科和应用型人文社科为主体，
                直接对接区域经济社会发展需求，为学院发展提供更广阔的空间。
              </p>
              <div className="space-y-4">
                {[
                  "交叉学科创新发展",
                  "新兴工科重点布局", 
                  "产学研深度融合",
                  "国际化办学环境"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 联系方式 */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">期待与您携手合作</h3>
            <p className="text-lg text-gray-300 mb-8">
              无论您是希望参与全球学者合作计划、桑浦论坛，还是对院长职位感兴趣，
              我们都期待与您建立联系，共同推动学术发展与创新。
            </p>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-8 mb-8">
            <h4 className="text-xl font-bold text-white mb-6">联系我们</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-white justify-center">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium">蒋 标</div>
                  <div className="text-gray-300 text-sm">jiangbiao@mshare.cn</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white justify-center">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium">汕头大学</div>
                  <div className="text-gray-300 text-sm">广东省汕头市大学路243号</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = 'mailto:jiangbiao@mshare.cn?subject=汕头大学合作意向沟通'}
            >
              <Mail className="mr-2 h-4 w-4 text-black" />
              立即联系我们
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-black hover:bg-gray-700 hover:text-white px-8 py-3"
              onClick={() => window.open('https://www.stu.edu.cn/sy.htm', '_blank')}
            >
              <Globe className="mr-2 h-4 w-4 text-black" />
              访问学校官网
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-black hover:bg-gray-700 hover:text-white px-8 py-3"
              onClick={() => window.open('https://wenjuan.feishu.cn/m?t=sBK9voYqpQ8i-tau1', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4 text-black" />
              合作意向表填写
            </Button>
          </div>
        </div>
      </div>

      {/* 职位详情弹窗 */}
      <Dialog open={selectedCollege !== null} onOpenChange={(open) => !open && setSelectedCollege(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              {selectedCollege === "工学院院长" && "工学院院长招聘"}
              {selectedCollege === "理学院院长" && "理学院院长招聘"}
              {selectedCollege === "公共卫生学院院长" && "公共卫生学院院长招聘"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* 工学院详情 */}
            {selectedCollege === "工学院院长" && (
              <>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">学院简介</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    工学院以本科教育为基础，不断提高办学层次，形成了完整的本、硕、博人才培养体系。
                    学院拥有一支具有国际视野、学术精湛、锐意创新、团结协作的国际化学术团队和管理团队。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">本科专业（9个）</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 电子信息工程</li>
                        <li>• 通信工程</li>
                        <li>• 土木工程</li>
                        <li>• 机械设计制造及其自动化</li>
                        <li>• 生物医学工程</li>
                        <li>• 智能制造工程</li>
                        <li>• 电子与计算机工程</li>
                        <li>• 建筑学</li>
                        <li>• 智能建造</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">学科建设</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 土木工程一级学科博士点</li>
                        <li>• 土木工程博士后流动站</li>
                        <li>• 3个一级学科硕士点</li>
                        <li>• 3个国家一流本科专业建设点</li>
                        <li>• 广东省滨海智慧城市重点建设学科</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">师资力量</h5>
                    <p className="text-sm text-gray-700">
                      现有专任教师133人，95.5%具博士学位，48%具有海外学习工作经历。
                      院士3名，国家级高层次人才2名，省级高层次人才16名，
                      8位学者入选斯坦福年度"全球前2%顶尖科学家榜单"。
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">招聘要求</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">基本条件</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 政治素质高，理想信念坚定，坚持社会主义办学方向</li>
                        <li>• 具有相关专业正高级职称</li>
                        <li>• 年龄一般不超过50周岁，特别优秀者可放宽至55周岁</li>
                        <li>• 身体健康，聘期内能全职到岗工作</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">专业要求</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 在相关专业领域学术造诣深厚，取得国内外同行公认的高水平学术成就</li>
                        <li>• 具有良好的业界声誉，熟悉本学科国内外发展情况</li>
                        <li>• 国家级人才计划入选者及学术领军人才优先</li>
                        <li>• 具备带领学科可持续发展、建设一流学院的能力</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">管理能力</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 组织领导能力强，有较强的创新意识和担当精神</li>
                        <li>• 具有丰富的教育教学管理经验</li>
                        <li>• 曾在国内外知名大学相关院系担任领导职务者优先</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* 理学院详情 */}
            {selectedCollege === "理学院院长" && (
              <>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">学院简介</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    汕头大学理学院于1993年组建成立，经过三十多年的发展壮大。
                    目前设有物理学系、生物学系两个学系和海洋科学研究院一个科研机构（含南澳临海实验站）。
                  </p>
                  
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">学科平台</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 1个博士后科研流动站（生物学）</li>
                        <li>• 2个一级学科博士点</li>
                        <li>• 3个一级学科硕士点</li>
                        <li>• 2个专业学位硕士点</li>
                        <li>• 7个学科进入ESI前1%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">重点实验室</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 广东省海洋生物技术重点实验室</li>
                        <li>• 省市共建海洋灾害预警与防护重点实验室</li>
                        <li>• 海洋科学省重点建设学科</li>
                        <li>• 南澳临海实验站</li>
                        <li>• 实验仪器设备总价值超过1亿元</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">师资队伍</h5>
                    <p className="text-sm text-gray-700">
                      现有教职员工152人，专任教师100人，全职教授33人。
                      60%教师有海外学习或工作经历，97%教师具有博士学位，
                      其中22名教师的博士学位在英美等国家或地区获得。
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">招聘要求</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">基本条件</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 政治素质高，理想信念坚定，坚持社会主义办学方向</li>
                        <li>• 具有相关专业正高级职称</li>
                        <li>• 年龄一般不超过50周岁，特别优秀者可放宽至55周岁</li>
                        <li>• 身体健康，聘期内能全职到岗工作</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">专业要求</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 在理学相关专业领域学术造诣深厚，取得国内外同行公认的高水平学术成就</li>
                        <li>• 具有良好的业界声誉，熟悉本学科国内外发展情况</li>
                        <li>• 国家级人才计划入选者及学术领军人才优先</li>
                        <li>• 具备带领学科可持续发展、建设一流学院的能力</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">管理能力</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 组织领导能力强，有较强的创新意识和担当精神</li>
                        <li>• 具有丰富的教育教学管理经验</li>
                        <li>• 曾在国内外知名大学相关院系担任领导职务者优先</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* 公共卫生学院详情 */}
            {selectedCollege === "公共卫生学院院长" && (
              <>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">学院简介</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    汕头大学公共卫生学院于2020年4月成立，积极响应国家"新医科"建设的战略布局，
                    以《"健康中国2030"规划纲要》精神为指导，致力于培养具备公共卫生理论与技能的实战型专业人才。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">专业设置</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 预防医学本科专业</li>
                        <li>• 公共卫生与预防医学一级学科硕士点</li>
                        <li>• 公共卫生硕士专业学位授权点（MPH）</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">发展历程</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 1993年创建中国预防医学科学院汕头分院</li>
                        <li>• 2010年招收首届MPH学生</li>
                        <li>• 2016年MPH教育部评估全国第三名</li>
                        <li>• 2017年获一级学科硕士学位授权点</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">学科实力与培养平台</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="text-sm font-medium text-gray-800 mb-1">学科排名</h6>
                        <p className="text-sm text-gray-700">
                          • 预防医学专业上榜"2024软科中国大学专业排名"<br/>
                          • 公共卫生与预防医学学科在"2023软科中国最好学科排名"中与同济大学并列第40名
                        </p>
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-gray-800 mb-1">实践教学平台</h6>
                        <p className="text-sm text-gray-700">
                          建设优质的本科生实践、实习教学平台，校外实习基地共18个，
                          其中位于粤港澳大湾区8个，为学生提供丰富的实践机会和就业前景。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">招聘要求</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">基本条件</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 政治素质高，理想信念坚定，坚持社会主义办学方向</li>
                        <li>• 具有相关专业正高级职称</li>
                        <li>• 年龄一般不超过50周岁，特别优秀者可放宽至55周岁</li>
                        <li>• 身体健康，聘期内能全职到岗工作</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">专业要求</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 在公共卫生与预防医学领域学术造诣深厚</li>
                        <li>• 具有良好的业界声誉，熟悉本学科国内外发展情况</li>
                        <li>• 国家级人才计划入选者及学术领军人才优先</li>
                        <li>• 具备推进"新医科"建设和学科交叉融合的能力</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">管理能力</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 组织领导能力强，有较强的创新意识和担当精神</li>
                        <li>• 具有丰富的公共卫生教育教学管理经验</li>
                        <li>• 曾在国内外知名大学相关院系担任领导职务者优先</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <div className="bg-gray-800 rounded-lg p-6 text-white">
              <h4 className="text-lg font-bold mb-4">薪酬待遇</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>• 首聘期限5年（含任职试用期1年）</li>
                  <li>• 提供有竞争力的薪酬待遇</li>
                  <li>• 可申请广东省、汕头市人才支持计划</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>• 李嘉诚基金会持续资助</li>
                  <li>• 完善的科研基础设施支持</li>
                  <li>• 优质的学术发展平台</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button 
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white"
                onClick={() => {
                  let surveyUrl = '';
                  if (selectedCollege === "工学院院长") {
                    surveyUrl = 'https://wenjuan.feishu.cn/m?t=s86dqxDYoQ8i-w4fe';
                  } else if (selectedCollege === "理学院院长") {
                    surveyUrl = 'https://wenjuan.feishu.cn/m?t=sPXWvoYqpQ8i-lhg3';
                  } else if (selectedCollege === "公共卫生学院院长") {
                    surveyUrl = 'https://wenjuan.feishu.cn/m?t=skaWk5p0oQ8i-ars2';
                  }
                  
                  if (surveyUrl) {
                    window.open(surveyUrl, '_blank');
                  }
                  setSelectedCollege(null);
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                提交应聘意向
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCollege(null)}
                className="px-8"
              >
                关闭
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Shantou University. All rights reserved.</p>
              <p className="text-xs mt-1">有志ASPIRATION · 有识KNOWLEDGE · 有恒PERSEVERANCE · 有为ACHIEVEMENT</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">使用条款</a>
              <a href="#" className="hover:text-white transition-colors">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
