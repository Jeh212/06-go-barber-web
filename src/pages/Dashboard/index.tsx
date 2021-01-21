import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Container,
	Header,
	HeaderContent,
	Profile,
	Schedule,
	Content,
	Calendar,
	NextAppointment,
	Section,
	Appointment
} from './styles';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';


interface MonthAvailabiltyItem{
  day:number;
  available:boolean;
}

const Dashboard: React.FC = () => {
	const { signOut, user } = useAuth();
  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const [monthAvailability,setMonthAvailabilty] = useState<MonthAvailabiltyItem[]>([])
  const [currentMonth,setCurrentMonth] = useState(new Date());




	const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
		if (modifiers.available) {
			setSelectedDate(day);
		}
  }, []);

  const handleMonthChange = useCallback(
    (month:Date) => {
      setCurrentMonth(month)
    },
    [],
  )


  useEffect(() => {
    api.get(`/providers/${user.id}/month-availability`,{
      params:{
        year:currentMonth.getFullYear(),
        month:currentMonth.getMonth()+1,
      }
    }).then(response=>setMonthAvailabilty(response.data))
  }, [currentMonth,user])

  const disableDays = useMemo(()=>{
    const dates = monthAvailability.filter(monthDay=>monthDay.available === false)
    .map(monthDay=>{
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      return new Date(year,month,monthDay.day)
    })
    return dates;
  },[currentMonth,monthAvailability])

	return (
		<Container>
			<Header>
				<HeaderContent>
					<img src={logoImg} alt="GObarber" />
					<Profile>
						<img src={user.avatar_url} alt={user.name} />
						<div>
							<span>Bem Vindo</span>
							<strong>{user.name}</strong>
						</div>
					</Profile>
					<button type="button" onClick={signOut}>
						<FiPower />
					</button>
				</HeaderContent>
			</Header>

			<Content>
				<Schedule>
					<h1>Horarios agendados</h1>
					<p>
						<span>Hoje</span>
						<span>Dia 06</span>
						<span>Segunda-feira</span>
					</p>
					<NextAppointment>
						<strong>Atendimento a seguir</strong>
						<div>
							<img
								src="https://avatars1.githubusercontent.com/u/29873371?s=460&u=f4a2796ecd3dbfbf80f2f59a392d5f08353e58bf&v=4"
								alt="Jean Carlos"
							/>
							<strong>Jean Carlos</strong>
							<span>
								<FiClock />
								08:00
							</span>
						</div>
					</NextAppointment>
					<Section>
						<strong>Manhã</strong>
						<Appointment>
							<span>
								<FiClock />
								08:00
							</span>

							<div>
								<img
									src="https://avatars1.githubusercontent.com/u/29873371?s=460&u=f4a2796ecd3dbfbf80f2f59a392d5f08353e58bf&v=4"
									alt="Jean Carlos"
								/>
								<strong>Jean Carlos</strong>
							</div>
						</Appointment>
						<Appointment>
							<span>
								<FiClock />
								08:00
							</span>

							<div>
								<img
									src="https://avatars1.githubusercontent.com/u/29873371?s=460&u=f4a2796ecd3dbfbf80f2f59a392d5f08353e58bf&v=4"
									alt="Jean Carlos"
								/>
								<strong>Jean Carlos</strong>
							</div>
						</Appointment>
					</Section>
					<Section>
						<strong>Tarde</strong>
						<Appointment>
							<span>
								<FiClock />
								08:00
							</span>

							<div>
								<img
									src="https://avatars1.githubusercontent.com/u/29873371?s=460&u=f4a2796ecd3dbfbf80f2f59a392d5f08353e58bf&v=4"
									alt="Jean Carlos"
								/>
								<strong>Jean Carlos</strong>
							</div>
						</Appointment>
					</Section>
				</Schedule>
				<Calendar>
          <DayPicker
            weekdaysShort={[ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ]}
            fromMonth={new Date()}
            modifiers={{
              available: { daysOfWeek: [ 1, 2, 3, 4, 5 ] }
            }}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            disabledDays={[ { daysOfWeek: [ 0, 6 ] }, ...disableDays]}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro'
            ]}
          />
        </Calendar>
			</Content>
		</Container>
	);
};

export default Dashboard;
