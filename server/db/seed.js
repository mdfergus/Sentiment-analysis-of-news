const { db, Student, Campus } = require('./index');

const students = [
  {
    firstName: 'Matt',
    lastName: 'Ferguson',
    email: 'matt.ferguson@purdue.edu',
    imageUrl: 'https://placem.at/people?w=350&random=1',
    gpa: 3.24
  },
  {
    firstName: 'Nick',
    lastName: 'Bixby',
    email: 'nick.bixby@usafa.edu',
    imageUrl:
      'https://placemat.imgix.net/placeholder_images/images/000/000/125/original/10860237285_85c4152b59_b.jpg?ixlib=rb-1.0.0&w=350&h=&fm=auto&crop=faces%2Centropy&fit=crop&txt=350%C3%97&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=a471c155fe5eee7a012f64420d7c549d',
    gpa: 3.72
  },
  {
    firstName: 'Zach',
    lastName: 'Cain',
    email: 'zach.cain@pbu.edu',
    imageUrl:
      'https://placemat.imgix.net/placeholder_images/images/000/000/096/original/14916514951_29dca03ae6_b.jpg?ixlib=rb-1.0.0&w=350&h=&fm=auto&crop=faces%2Centropy&fit=crop&txt=350%C3%97&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=4623f83d6b489a05bd7940f66ddf9111',
    gpa: 3.12
  },
  {
    firstName: 'Jake',
    lastName: 'Belcher',
    email: 'jake.belcher@pbu.edu',
    imageUrl:
      'https://placemat.imgix.net/placeholder_images/images/000/000/098/original/14213500913_c8af84b061_b.jpg?ixlib=rb-1.0.0&w=350&h=&fm=auto&crop=faces%2Centropy&fit=crop&txt=350%C3%97&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=8f2c731dd1c42cb4233feed3930092a1',
    gpa: 2.83
  },
  {
    firstName: 'Sean',
    lastName: 'Snoke',
    email: 'sean.snoke@purdue.edu',
    imageUrl:
      'https://placemat.imgix.net/placeholder_images/images/000/000/076/original/8172922880_14b5a6ee02_k.jpg?ixlib=rb-1.0.0&w=350&h=&fm=auto&crop=faces%2Centropy&fit=crop&txt=350%C3%97&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=b278212bab97cdd8af9f231de3dd729c',
    gpa: 3.12
  },
  {
    firstName: 'Sarah',
    lastName: 'Ferguson',
    email: 'sarah.ferguson@wcu.edu',
    imageUrl:
      'https://placemat.imgix.net/placeholder_images/images/000/000/104/original/9775128725_ee46c8cc8c_b.jpg?ixlib=rb-1.0.0&w=350&h=&fm=auto&crop=faces%2Centropy&fit=crop&txt=350%C3%97&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=428d83781b5c9e532a6edc367a3f4ea6',
    gpa: 3.82
  }
];

const campus = [
  {
    name: 'Purdue University',
    address: '610 Purdue Mall, West Lafayette, IN 47907',
    description: `Purdue University is a public research university in West Lafayette, Indiana and is the flagship campus of the Purdue University system. The university was founded in 1869 after Lafayette businessman John Purdue donated land and money to establish a college of science, technology, and agriculture in his name. The first classes were held on September 16, 1874, with six instructors and 39 students.

    The main campus in West Lafayette offers more than 200 majors for undergraduates, over 69 masters and doctoral programs, and professional degrees in pharmacy and veterinary medicine. In addition, Purdue has 18 intercollegiate sports teams and more than 900 student organizations. Purdue is a member of the Big Ten Conference and enrolls the second largest student body of any university in Indiana, as well as the fourth largest international student population of any university in the United States.`
  },
  {
    name: 'West Chester University',
    imageUrl:
      'http://www.post-gazette.com/image/2014/03/21/1140x_q90_a10-7_cTC_ca0,14,2550,1698/WestChesterUniversity5.jpg',
    address: '700 S High St, West Chester, PA 19382',
    description: `West Chester University of Pennsylvania (WCUPA) is a public university located in West Chester, Pennsylvania, about 25 miles (40 km) west of Philadelphia. It is the largest of the 14 state universities of the Pennsylvania State System of Higher Education (PASSHE). West Chester was ranked 61st in the Master's Universities (North) category by U.S. News & World Report for 2017. The school is accredited by the Middle States Association of Colleges and Schools (MSACS).`
  },
  {
    name: 'Cairn University (Philadelphia Biblical University)',
    imageUrl:
      'http://civa.org/sitecontent/wp-content/uploads/education-cairn-header.jpg',
    address: '200 Manor Ave, Langhorne, PA 19047',
    description: `Cairn University is a Christian university in Langhorne, Pennsylvania. Founded in 1913, the university has six schools: Divinity, Liberal Arts and Sciences, Business, Education, Music, and Social Work. All students take a minimum of 30 semester hours of Bible.`
  },
  {
    name: 'Air Force Academy',
    imageUrl:
      'https://media2.fdncms.com/csindy/imager/working-afa-reports-ig-review/u/original/2952753/marching4_by_afa.jpg',
    address: '2304 Cadet Drive, Suite 3100, USAF Academy, CO 80840-5002',
    description: `The United States Air Force Academy (also known as USAFA, the Air Force Academy, or the Academy), is a military academy for officer cadets of the United States Air Force. Its campus is located in the western United States in Colorado, immediately north of Colorado Springs in El Paso County.

    The Academy's stated mission is "to educate, train, and inspire men and women to become leaders of character, motivated to lead the United States Air Force in service to our nation." It is the youngest of the five U.S. service academies, having graduated its first class 59 years ago in 1959, however it is the third in seniority. Graduates of the Academy's four-year program receive a Bachelor of Science degree, and are commissioned as second lieutenants in the U.S. Air Force. The Academy is also one of the largest tourist attractions in Colorado, attracting approximately a million visitors each year.`
  }
];

const seedFile = async () => {
  try {
    await db.sync({ force: true });
    const makeCampuses = await Campus.bulkCreate(campus, { returning: true });
    const makeStudents = await Student.bulkCreate(students, {
      returning: true
    });
    const enrollStudent = Promise.all([
      makeStudents[0].setCampus(makeCampuses[0]),
      makeStudents[1].setCampus(makeCampuses[3]),
      makeStudents[2].setCampus(makeCampuses[2]),
      makeStudents[3].setCampus(makeCampuses[2]),
      makeStudents[4].setCampus(makeCampuses[0]),
      makeStudents[5].setCampus(makeCampuses[1])
    ]);
    await Promise.all([enrollStudent]);
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

seedFile();
